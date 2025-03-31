export function Page({ theme, children }: { theme: "dark" | "light"; children: React.ReactNode }) {
    return (
      <main className={`h-screen flex items-center justify-center ${theme === "dark" ? "theme-dark" : "theme-light"}`}>
        {children}
      </main>
    );
  }
  
  