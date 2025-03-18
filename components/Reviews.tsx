import { testimonials } from "@/constants";
import { Star } from "lucide-react";

const Reviews = () => {
  return (
    <section className="bg-muted section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Don't just take our word for it. Here's what our satisfied customers
            have to say about our home improvement and repair services.
          </p>
        </div>

        <div className="flex flex-col md:flex-row flex-wrap gap-8 justify-center">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex-1 min-w-[280px] max-w-md bg-background p-6 rounded-lg shadow-md flex flex-col"
            >
              <div className="mb-4">
                <h3 className="font-semibold">{testimonial.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {testimonial.service}
                </p>
              </div>

              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonial.rating
                        ? "text-primary fill-primary"
                        : "text-muted-foreground"
                    }`}
                  />
                ))}
              </div>

              <p className="text-muted-foreground flex-grow">
                "{testimonial.testimonial}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
