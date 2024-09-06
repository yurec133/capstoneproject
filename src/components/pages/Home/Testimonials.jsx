import "./Testimonials.css";
import TestimonialCard from "./TestimonialCard";

const customers = [
  {
    fullName: "Mykola",
    image:
      "/images/profile.svg",
    rating: [1, 1, 1, 1, 0.5],
    says: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempus tempor felis a accumsan.",
  },
  {
    fullName: "Anton",
    image:
      "/images/profile.svg",
    rating: [1, 1, 1, 1, 0],
    says: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempus tempor felis a accumsan.",
  },
  {
    fullName: "Markus",
    image:
      "/images/profile.svg",
    rating: [1, 1, 1, 1, 0.5],
    says: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempus tempor felis a accumsan.",
  },
  {
    fullName: "Brain",
    image:
      "/images/profile.svg",
    rating: [1, 1, 1, 1, 1],
    says: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempus tempor felis a accumsan.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container grid">
        <h2>Testimonials</h2>
        {customers.map((customer, index) => (
          <TestimonialCard key={index} customer={customer} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
