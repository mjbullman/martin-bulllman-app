/**
 * Represents a hyperlink with a title and URL.
 *
 * @property {string} title - The title of the hyperlink.
 * @property {string} href - The URL or hyperlink reference.
 */
export interface Link {
    title: string
    href: string
}

/**
 * Represents an image with a URL and alternative text.
 *
 * @property {string} href - The URL of the image.
 * @property {string} alt - The alternative text for the image, used for accessibility.
 */
export interface Image {
    href: string
    alt: string
}

/**
 * Represents a project with various details, including images, text, technologies, and links.
 *
 * @property {number} id - The unique identifier for the project.
 * @property {string} title - The title of the project.
 * @property {string} subTitle - The subtitle or brief description of the project.
 * @property {Image=} img - (Optional) An image associated with the project.
 * @property {string} text - The main text or description of the project.
 * @property {string[]} technologies - An array of technologies used in the project.
 * @property {string[]=} chips - (Optional) An array of chip labels or tags associated with the project.
 * @property {Link[]} links - An array of links related to the project.
 */
export interface Project {
    id: number
    title: string
    subTitle: string
    img?: Image
    text: string
    technologies: string[]
    chips?: string[]
    links: Link[]
}
