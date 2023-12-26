import LoginForm from "@/components/auth/LoginForm";

const LoginPage = () => {
  return (
    <div className="h-screen w-full flex  flex-col items-center gap-4 pt-8 border bg-slate-800">
      <h2 className="text-bold text-xl text-white ">Iniciar sesión en la red social</h2>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
