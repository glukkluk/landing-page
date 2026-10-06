import "./testimonials.css";
export function testimonials({ anchor, title, items }) {
    return `
        <section class="testimonials" id="${anchor}">
            <h2 class="section-title">${title}</h2>
            <div class="testimonials__list">
                ${items
                    .map(
                        ({ name, text, rating }) =>
                            `<figure class="testimonial">
                            <div class="testimonial__rating">${"★".repeat(rating)}</div>
                            <blockquote class="testimonial__text">${text}</blockquote>
                            <figcaption class="testimonial__name">${name}</figcaption>
                        </figure>`,
                    )
                    .join("")}
            </div>
        </section>
    `;
}
