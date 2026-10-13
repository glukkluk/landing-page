export function footer({ siteName, footer: { text } }) {
    const year = new Date().getFullYear();

    return `
        <footer class="footer"> &copy; ${year} ${siteName}. ${text}</footer>
    `;
}
