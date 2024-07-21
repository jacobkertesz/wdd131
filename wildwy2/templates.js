export function entryTemplate(entry)
{
    const entryTemplate = 
    `
        <div class="tab-grid">
            <div>
                <h2>${entry.title}</h2>
                <p>${entry.info}</p>
            </div>
            <img src="images/${entry.img}" alt="${entry.alt}">
        </div>
    `;
    return entryTemplate;
}