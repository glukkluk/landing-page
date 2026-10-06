import "./contacts.css";

export function contacts({ anchor, title, phone, email, address }) {
    return `
        <section class="contacts" id="${anchor}">
            <h2 class="section-title">${title}</h2>
            <a class="contacts__link" href="tel:${phone}">+${phone}</a>
            <a class="contacts__link" href="mailto:${email}">${email}</a>
            <p class="contacts__address">${address}</p>
        </section>
    `;
}
