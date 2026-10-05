const ServiceCard = ({ service }) => {
  const Icon = service.icon;
  return (
    <div className="border border-neutral-200 p-8 hover:border-accent hover:shadow-lg transition bg-white">
      {Icon && <Icon size={32} strokeWidth={1.25} className="text-accent" />}
      <h3 className="mt-5 text-xl font-medium">{service.title}</h3>
      <p className="mt-3 text-sm text-neutral-500 leading-relaxed">{service.description}</p>
    </div>
  );
};

export default ServiceCard;