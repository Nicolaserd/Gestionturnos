import "./Servicios.css"
import imgCita from '../assets/agendar_cita_casino.jpeg';
import imgVip from '../assets/vip_cliente.jpeg';
import imgRegistro from '../assets/REGISTRO.jpeg';
const Servicios = () => {
  
    return (
    <>
    <h1 className="tituloServicios"> SERVICIOS </h1>
     <div className="contenedorServicios">
        <div className="inServices">
           <img className="inServicesImg" src={imgRegistro} alt="Vipcliente" />
        </div>
        <div className="inServices">
        <h1 className="inServicesTitulo"> Registrarse </h1>
            <p className="inServicesDescripcion">
            Regístrate ahora para acceder a todos nuestros servicios exclusivos. En Banca Futura, te ofrecemos la oportunidad de disfrutar de emocionantes experiencias de apuestas. Desde eventos deportivos hasta juegos de casino de lujo, nuestro servicio de reservas te brinda la comodidad de planificar tu diversión según tus preferencias. Únete a nosotros y forma parte de nuestra comunidad de apuestas. ¡Regístrate hoy y comienza a disfrutar de los beneficios que tenemos para ofrecerte!
            </p>
        </div>
    </div>
    <div className="contenedorServicios">
        <div className="inServices">
        <img className="inServicesImg" src={imgCita} alt="Agenda tu cita" />
        </div>
        <div className="inServices">
            <h1 className="inServicesTitulo"> Agenda tu cita para apuestas </h1>
            <p className="inServicesDescripcion">
                ¡Bienvenido a nuestro servicio de citas para apuestas! En Banca Futura, te ofrecemos la oportunidad de reservar una cita para disfrutar de emocionantes experiencias de apuestas. Desde eventos deportivos hasta juegos de casino, nuestra plataforma te brinda la posibilidad de reservar tu lugar para vivir la emoción y la diversión de tus actividades de apuestas favoritas. ¡Agenda tu cita ahora y únete a nosotros para una experiencia de apuestas inolvidable!
            </p>
        </div>
    </div>
   
    <div className="contenedorServicios">
        <div className="inServices">
           <img className="inServicesImg" src={imgVip} alt="Vipcliente" />
        </div>
        <div className="inServices">
        <h1 className="inServicesTitulo"> VIP de Reservas para Apuestas </h1>
            <p className="inServicesDescripcion">
            En Banca Futura, nuestro servicio VIP de reservas para apuestas está diseñado para aquellos que buscan una experiencia exclusiva y personalizada en el mundo de las apuestas. Como cliente VIP, tendrás acceso privilegiado a reservas prioritarias para eventos deportivos de alto perfil, juegos de casino de lujo y experiencias únicas en nuestro establecimiento. Nuestro equipo dedicado de atención al cliente se encargará de todas tus necesidades, desde la organización de citas especiales hasta la coordinación de eventos privados. Únete a nuestro programa VIP y déjate llevar por la emoción de apostar con estilo y elegancia. ¡Hazte cliente VIP hoy y comienza a disfrutar de un servicio exclusivo que superará todas tus expectativas!
            </p>
        </div>
    </div>
 
   
  

    </>
    );
  };
  
  export default Servicios;