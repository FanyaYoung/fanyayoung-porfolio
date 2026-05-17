import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Loader2, ArrowLeft } from "lucide-react";
import { z } from "zod";

const passwordSchema = z.string().min(6, { message: "Password must be at least 6 characters" }).max(128);

const ResetPassword = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Supabase auto-handles the recovery token in the URL hash and emits a PASSWORD_RECOVERY event
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
      if (event === "PASSWORD_RECOVERY" || event === "SIGNED_IN") setReady(true);
    });
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) setReady(true);
    });
    return () => subscription.unsubscribe();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = passwordSchema.safeParse(password);
    if (!parsed.success) {
      toast({ title: "Invalid password", description: parsed.error.errors[0].message, variant: "destructive" });
      return;
    }
    if (password !== confirm) {
      toast({ title: "Passwords don't match", variant: "destructive" });
      return;
    }
    setSubmitting(true);
    const { error } = await supabase.auth.updateUser({ password: parsed.data });
    setSubmitting(false);
    if (error) {
      toast({ title: "Update failed", description: error.message, variant: "destructive" });
      return;
    }
    toast({ title: "Password updated", description: "You're signed in." });
    navigate("/", { replace: true });
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center px-6">
      <div
        className="fixed inset-0 -z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top, hsl(270 100% 70% / 0.12) 0%, hsl(230 20% 5%) 55%)",
        }}
      />
      <div className="w-full max-w-md card-neon">
        <button
          onClick={() => navigate("/auth")}
          className="text-muted-foreground hover:text-primary transition-colors mb-6 inline-flex items-center gap-2 text-sm"
        >
          <ArrowLeft size={16} /> Back to sign in
        </button>
        <div className="mb-8">
          <span className="inline-block text-xs uppercase tracking-[0.2em] text-primary/80 font-medium mb-3">
            Reset Password
          </span>
          <h1 className="text-3xl font-semibold text-foreground tracking-tight">Set a new password</h1>
        </div>
        {!ready ? (
          <p className="text-sm text-muted-foreground">
            Open this page from the password reset link in your email.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs uppercase tracking-wider text-muted-foreground font-medium">New password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="h-11 rounded-md border border-border bg-background/50 backdrop-blur-sm px-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Confirm password</label>
              <input
                type="password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                required
                className="h-11 rounded-md border border-border bg-background/50 backdrop-blur-sm px-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="btn-cyber w-full inline-flex items-center justify-center gap-2 h-11 disabled:opacity-50"
            >
              {submitting && <Loader2 size={16} className="animate-spin" />}
              Update password
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ResetPassword;
