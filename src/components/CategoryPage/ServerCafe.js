import React from 'react'
import DealsCard from '../DealsSection/DealsCard';

function ServerCafe() {
    const ServerCafeData = [
        {
            id: 0,
            offText: "5% Off",
            rdpName: "ServerCafe",
            cardTitle: "USA Dedicated Server $5 off",
            verifyText: "Verified 8 Days Ago",
            usesText: "28 Uses Today",
            BoxDesc: "Customizable Dedicated Server Solutions for Your Unique Needs.",
            btnLink: "https://serverscafe.com/",
            modalDesc: "Copy & paste the following code at checkout on",
            modalCode: "Tdafr976",
        },
        {
            id: 1,
            offText: "10% Off",
            rdpName: "ServerCafe",
            cardTitle: "Now Get 10% Off on Mexico Dedicated Server.",
            verifyText: "Verified 18 Days Ago",
            usesText: "34 Uses Today",
            BoxDesc: "We offer dedicated server solutions tailored to meet your unique requirements and enhance your business operations.",
            btnLink: "https://serverscafe.com/",
            modalDesc: "Copy & paste the following code at checkout on",
            modalCode: "Fjahki87",
        },
        {
            id: 2,
            offText: "15% Off",
            rdpName: "ServerCafe",
            cardTitle: "Get 15% Off On Europe Dedicated Server.",
            verifyText: "Verified 4 Days Ago",
            usesText: "28 Uses Today",
            BoxDesc: "Customizable Server Options Choose from a range of processor, storage, and RAM options to build a server that meets your specific needs.",
            btnLink: "https://serverscafe.com/",
            modalDesc: "Copy & paste the following code at checkout on",
            modalCode: "XKhsgd",
        },
        {
            id: 3,
            offText: "20% Off",
            rdpName: "ServerCafe",
            cardTitle: "Get 20% Off Each Time On Netherlands Dedicated Server.",
            verifyText: "Verified 1 Days Ago",
            usesText: "71 Uses Today",
            BoxDesc: "Get High-Performance Hardware Our dedicated servers are built with the latest hardware to ensure maximum performance and reliability.",
            btnLink: "https://serverscafe.com/",
            modalDesc: "Copy & paste the following code at checkout on",
            modalCode: "Hfagva",
        },
        {
            id: 4,
            offText: "25% Off",
            rdpName: "ServerCafe",
            cardTitle: "Get 25% Off Each Time On GPU Dedicated Server.",
            verifyText: "Verified 2 Days Ago",
            usesText: "30 Uses Today",
            BoxDesc: "Get Scalable Server Solutions As your business grows, our dedicated servers can be easily scaled to meet your changing requirements.",
            btnLink: "https://serverscafe.com/",
            modalDesc: "Copy & paste the following code at checkout on",
            modalCode: "Dafdayt",
        },
        {
            id: 68,
            offText: "15% Off",
            rdpName: "ServerCafe",
            cardTitle: "Now Get 15% Off on All Plans - Elevate Your Experience with Secure and Efficient RDPs!",
            verifyText: "Verified 1 Days Ago",
            usesText: "5 Uses Today",
            BoxDesc: "Experience the next level of productivity with our diverse range of Remote Desktop Plans. Unlock a 15% discount on all plans, ensuring secure and efficient remote access tailored to your needs. Elevate your digital journey and enjoy seamless connectivity today!",
            btnLink: "https://serverscafe.com/",
            modalDesc: "Copy & paste the following code at checkout on",
            modalCode: "PLANSAVER15",
        }
    ]

    return (
        <>
            {ServerCafeData.map((val) => {
                return (
                    <DealsCard
                        id={val.id}
                        offText={val.offText}
                        rdpName={val.rdpName}
                        cardTitle={val.cardTitle}
                        verifyText={val.verifyText}
                        usesText={val.usesText}
                        BoxDesc={val.BoxDesc}
                        btnLink={val.btnLink}
                        modalDesc={val.modalDesc}
                        modalCode={val.modalCode}
                    />
                )
            })}
        </>
    )
}

export default ServerCafe