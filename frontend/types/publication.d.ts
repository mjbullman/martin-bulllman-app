/**
 * Represents a link with various properties such as title, icon, label, and href.
 *
 * @property {string} title - The title of the link.
 * @property {string=} icon - (Optional) The icon associated with the link.
 * @property {string} label - A short description or name for the link.
 * @property {string} href - The URL that the link points to.
 */
export interface Link {
    title: string
    icon?: string
    label: string
    href: string
}

/**
 * Represents a publication with properties such as id, year, title, text, and an array of links.
 *
 * @property {number} id - The unique identifier for the publication.
 * @property {string} year - The year when the publication was published.
 * @property {string} title - The title of the publication.
 * @property {string} text - The main content or text of the publication.
 * @property {Link[]} links - An array of Link objects associated with the publication.
 */
export interface Publication {
    id: number
    year: string
    title: string
    text: string
    links: Link[]
}
