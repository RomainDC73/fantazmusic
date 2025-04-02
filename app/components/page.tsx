export function Page({ theme, children }: { theme: "dark" | "light"; children: React.ReactNode }) {
    return (
      <main 
      className={`min-h-screen flex items-center justify-center ${theme === "dark" ? "theme-dark" : "theme-light"}`}
      style={{ scrollBehavior: 'smooth' }}
      >
        {children}
      </main>
    );
  }
  
  