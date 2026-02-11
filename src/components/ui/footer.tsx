// Import generic icons from lucide-react
import {
    Globe, // Could represent a website or general online presence
    Share2, // Could represent sharing/social media in general
    MessageCircle, // Could represent communication/social
    Link as LinkIcon, // Renamed to avoid conflict with Next.js Link
    Send, // Could represent sending a message, a bit like a paper plane for social
    Feather, // Could be an abstract representation for a 'feed' or 'post'
} from 'lucide-react'

const links = [
    {
        title: 'Home',
        href: '#home',
    },
    {
        title: 'About',
        href: '#about',
    },
    {
        title: 'Projects',
        href: '#projects',
    },
    {
        title: 'Contact',
        href: '#contact',
    },
]

export default function FooterSection() {
    return (
        <footer className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
                    {links.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            className="text-muted-foreground hover:text-primary block duration-150">
                            <span>{link.title}</span>
                        </a>
                    ))}
                </div>
                <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
                    {/* Using generic icons for social links */}
                    <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Social Link 1" // Generic label
                        className="text-muted-foreground hover:text-primary block">
                        <Share2 className="size-6" /> {/* Generic "Share" icon */}
                    </a>
                    <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Social Link 2"
                        className="text-muted-foreground hover:text-primary block">
                        <MessageCircle className="size-6" /> {/* Generic "Message" icon */}
                    </a>
                    <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Social Link 3"
                        className="text-muted-foreground hover:text-primary block">
                        <LinkIcon className="size-6" /> {/* Generic "Link" icon */}
                    </a>
                    <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Social Link 4"
                        className="text-muted-foreground hover:text-primary block">
                        <Globe className="size-6" /> {/* Generic "Globe" (website/world) icon */}
                    </a>
                    <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Social Link 5"
                        className="text-muted-foreground hover:text-primary block">
                        <Send className="size-6" /> {/* Generic "Send" icon */}
                    </a>
                    <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Social Link 6"
                        className="text-muted-foreground hover:text-primary block">
                        <Feather className="size-6" /> {/* Generic "Feather" (post/write) icon */}
                    </a>
                </div>
                <span className="text-muted-foreground block text-center text-sm"> © {new Date().getFullYear()} Tailark, All rights reserved</span>
            </div>
        </footer>
    )
}
