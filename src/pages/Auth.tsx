import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import { Loader2, ArrowLeft } from "lucide-react";
import { z } from "zod";

const credentialsSchema = z.object({
  email: z.string().trim().email({ message: "Invalid email" }).max(255),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }).max(128),
});

const Auth = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { session, loading: authLoading } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [resetting, setResetting] = useState(false);
  const [resetSent, setResetSent] = useState(false);

  const handleForgotPassword = async () => {
    const emailParsed = z.string().trim().email().safeParse(email);
    if (!emailParsed.success) {
      toast({ title: "Enter your email", description: "Type your email above first, then click Forgot password.", variant: "destructive" });
      return;
    }
    setResetting(true);
    const { error } = await supabase.auth.resetPasswordForEmail(emailParsed.data, {
      redirectTo: `${window.location.origin}/reset-password`,
    });
    setResetting(false);
    if (error) {
      toast({ title: "Couldn't send reset email", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Check your email", description: "A password reset link has been sent." });
    }
  };

  useEffect(() => {
    if (!authLoading && session) navigate("/", { replace: true });
  }, [session, authLoading, navigate]);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = credentialsSchema.safeParse({ email, password });
    if (!parsed.success) {
      toast({ title: "Invalid input", description: parsed.error.errors[0].message, variant: "destructive" });
      return;
    }
    setSubmitting(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: parsed.data.email,
      password: parsed.data.password,
    });
    setSubmitting(false);
    if (error) {
      toast({ title: "Sign in failed", description: error.message, variant: "destructive" });
    }
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
          onClick={() => navigate("/")}
          className="text-muted-foreground hover:text-primary transition-colors mb-6 inline-flex items-center gap-2 text-sm"
        >
          <ArrowLeft size={16} /> Back
        </button>
        <div className="mb-8">
          <span className="inline-block text-xs uppercase tracking-[0.2em] text-primary/80 font-medium mb-3">
            Admin Access
          </span>
          <h1 className="text-3xl font-semibold text-foreground tracking-tight">Sign in</h1>
        </div>
        <form onSubmit={handleSignIn} className="space-y-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-11 rounded-md border border-border bg-background/50 backdrop-blur-sm px-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
            Sign in
          </button>
          <button
            type="button"
            onClick={handleForgotPassword}
            disabled={resetting}
            className="w-full text-xs text-muted-foreground hover:text-primary transition-colors inline-flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {resetting && <Loader2 size={12} className="animate-spin" />}
            Forgot password?
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
