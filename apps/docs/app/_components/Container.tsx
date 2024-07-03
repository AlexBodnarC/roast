export default function Container({
  children,
  color,
}: {
  children: React.ReactNode;
  color: "orange" | "gray";
}) {
  return (
    <main
      className={`${color === "orange" ? "bg-[#FF6032]" : color === "gray" ? "bg-[#1F1F1F]" : "bg-primary"}  flex h-screen flex-col items-center justify-between w-full`}
    >
      {children}
    </main>
  );
}
