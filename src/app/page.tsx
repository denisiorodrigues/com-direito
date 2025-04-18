import DashboardLayout from "./components/DashboardLayout";

export default function Home() {
  return (
    <DashboardLayout>
      <div>
        {/* Conteúdo da sua página inicial do dashboard */}
        <h1 className="text-2xl font-semibold">Bem-vindo ao Dashboard!</h1>
        <p>Aqui você pode exibir seus dados e informações importantes.</p>
      </div>
    </DashboardLayout>
  )
}
