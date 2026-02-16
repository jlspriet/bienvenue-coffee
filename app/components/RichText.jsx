'use client';

import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

/**
 * Renders a content string with markdown/HTML support.
 * Plain strings render identically to before; markdown syntax
 * (e.g. **bold**, *italic*) and inline HTML (e.g. <u>) are supported.
 *
 * Use `as` to control the wrapper element (default: span).
 * Extra props/className are forwarded to the wrapper.
 */
export default function RichText({ children, as: Tag = 'span', className, ...rest }) {
    if (!children) return null;

    return (
        <Tag className={className} {...rest}>
            <ReactMarkdown
                rehypePlugins={[rehypeRaw]}
                components={{
                    // Strip the wrapping <p> that ReactMarkdown adds by default
                    p: ({ children }) => <>{children}</>,
                }}
            >
                {children}
            </ReactMarkdown>
        </Tag>
    );
}
