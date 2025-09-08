import { useState } from "react";
import Hero from "../components/services/Hero";
import ServicesSection from "../components/services/ServicesSection";
import Counsellors from "../components/services/Counsellors";
import Appointment from "../components/services/Appointment";
export default function Services() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const openModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedService(null), 300);
  };

  return (
    <div className="flex flex-col min-h-screen bg-black/30 text-white font-sans">
      <Header onBookAppointment={() => openModal()} />
      <main className="flex-grow">
        <Hero onBookAppointment={() => openModal()} />
        <ServicesSection onBookAppointment={openModal} />
        <Counsellors />
      </main>
      <Appointment
        isOpen={isModalOpen}
        onClose={closeModal}
        service={selectedService}
      />
      <footer className="w-full p-6 text-center text-gray-400 bg-black/50 backdrop-blur-sm mt-auto">
        <p>&copy; {new Date().getFullYear()} Relive. All rights reserved.</p>
      </footer>
    </div>
  );
}
