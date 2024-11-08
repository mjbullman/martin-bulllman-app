/**
 * Represents a hyperlink with a title and URL.
 *
 * @export
 * @interface Link
 */
export interface Link {
    /**
     * The title of the link.
     *
     * @type {string}
     */
    title: string;

    /**
     * The URL or hyperlink reference.
     *
     * @type {string}
     */
    href: string;
}

/**
 * Represents an image with a URL and alternative text.
 *
 * @export
 * @interface Image
 */
export interface Image {
    /**
     * The URL of the image.
     *
     * @type {string}
     */
    href: string;

    /**
     * The alternative text for the image, used for accessibility.
     *
     * @type {string}
     */
    alt: string;
}

/**
 * Represents a project with various details, including images, text, technologies, and links.
 *
 * @export
 * @interface Project
 */
export interface Project {
    /**
     * The unique identifier for the project.
     *
     * @type {number}
     */
    id: number;

    /**
     * The title of the project.
     *
     * @type {string}
     */
    title: string;

    /**
     * The subtitle or brief description of the project.
     *
     * @type {string}
     */
    subTitle: string;

    /**
     * An optional image associated with the project.
     *
     * @type {Image | undefined}
     */
    img?: Image;

    /**
     * The main text or description of the project.
     *
     * @type {string}
     */
    text: string;

    /**
     * An array of technologies used in the project.
     *
     * @type {string[]}
     */
    technologies: string[];

    /**
     * An optional array of chip labels or tags associated with the project.
     *
     * @type {string[] | undefined}
     */
    chips?: string[];

    /**
     * An array of links related to the project.
     *
     * @type {Link[]}
     */
    links: Link[];
}
