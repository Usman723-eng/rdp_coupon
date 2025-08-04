const SchemaMarkup = () => (
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
            __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ItemList",
                "name": "Top RDP Providers - 2025",
                "itemListOrder": "http://schema.org/ItemListOrderAscending",
                "numberOfItems": 6,
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "GoRDP",
                        "url": "https://rdpcoupon.com/gordp-coupons"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "RDPDatabase",
                        "url": "https://rdpcoupon.com/rdpdatabase-coupons"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "PCRDP",
                        "url": "https://rdpcoupon.com/pcrdp-coupons"
                    },
                    {
                        "@type": "ListItem",
                        "position": 4,
                        "name": "GoRDP (Quarterly)",
                        "url": "https://rdpcoupon.com/gordp-coupons"
                    },
                    {
                        "@type": "ListItem",
                        "position": 5,
                        "name": "RDPDatabase (Semi-Annual)",
                        "url": "https://rdpcoupon.com/rdpdatabase-coupons"
                    },
                    {
                        "@type": "ListItem",
                        "position": 6,
                        "name": "PCRDP (Annual)",
                        "url": "https://rdpcoupon.com/pcrdp-coupons"
                    }
                ]
            })
        }}
    />
);

export default SchemaMarkup;