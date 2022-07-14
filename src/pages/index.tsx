import Button from "../components/Button";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Table from "../components/Table";
import useClients from "../hooks/useClients";

export default function Home() {

  const {
    newClient,
    clientDeleted,
    saveClient,
    clientSelected,
    _client,
    clients,
    tableVisible,
    exibirTable
  } = useClients()


  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout title="Cadastro Simples">
        {tableVisible ? (
          <>
            <div className="flex justify-end">
              <Button
                cor="green"
                className="mb-4"
                onClick={newClient}
              >
                Novo cliente
              </Button>
            </div>
            <Table clients={clients}
              clientSelected={clientSelected}
              clientDeleted={clientDeleted}
            />
          </>
        ) : (
          <Form
            _client={_client}
            clientChange={saveClient}
            canceled={exibirTable}
          />
        )}
      </Layout>
    </div>
  )
}
