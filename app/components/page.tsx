export function Page({ theme, children }: { theme: "dark" | "light"; children: React.ReactNode }) {
    return (
      <main 
  className={`min-h-screen flex flex-col items-center justify-center relative ${theme === "dark" ? "theme-dark bg-transparent" : "theme-light"}`}
  style={{ scrollBehavior: 'smooth' }}
>
  {children}
</main>
    );
  }
  
  