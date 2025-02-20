export default function Contact() {
  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold">Contacto</h1>
      <form className="mt-4 flex flex-col">
        <input className="border p-2 mb-2" type="text" placeholder="Nombre" />
        <input className="border p-2 mb-2" type="email" placeholder="Correo" />
        <textarea className="border p-2 mb-2" placeholder="Mensaje"></textarea>
        <button className="bg-blue-500 text-white p-2">Enviar</button>
      </form>
    </main>
  );
}
