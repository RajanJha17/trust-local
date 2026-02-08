import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { useToast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";

const Verify = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const handleVerify = async () => {
    if (otp.length < 6) return;
    setLoading(true);
    setTimeout(() => {
      toast({ title: "Email verified!", description: "Your account is now active." });
      navigate("/");
      setLoading(false);
    }, 1000);
  };

  const handleResend = () => {
    toast({ title: "Code resent!", description: "Check your email for a new verification code." });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-md text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <Mail className="h-8 w-8 text-primary" />
        </div>

        <h1 className="mb-2 font-heading text-2xl font-bold text-foreground">Verify your email</h1>
        <p className="mb-8 text-sm text-muted-foreground font-body">
          We've sent a 6-digit code to your email. Enter it below to verify your account.
        </p>

        <div className="flex justify-center mb-6">
          <InputOTP maxLength={6} value={otp} onChange={setOtp}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </div>

        <Button
          onClick={handleVerify}
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
          disabled={otp.length < 6 || loading}
        >
          {loading ? "Verifying..." : "Verify Email"}
        </Button>

        <div className="mt-6 text-sm text-muted-foreground font-body">
          Didn't receive the code?{" "}
          <button onClick={handleResend} className="text-primary hover:underline">Resend</button>
        </div>

        <Link to="/login" className="mt-4 inline-block text-sm text-muted-foreground hover:text-primary">
          ← Back to login
        </Link>
      </div>
    </div>
  );
};

export default Verify;
