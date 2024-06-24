
export function useProjects () {

    let projects: object = [
        {
            id: 1,
            title: 'QuickMinutes',
            subTitle: 'Meeting Agenda & Minutes Simplified',
            img: {
                href: '/img/projects/quickminutes_banner.webp',
                alt: 'QuickMinutes banner image'
            },
            text: 'A meeting planning & management tool for centralized collaboration and communication.' +
                  '<br><br>QuickMinutes transforms the process of meeting management into an efficient and ' +
                  'satisfying activity.',
            technologies: [
                'Azure',
                'VueJS',
                'Vuetify',
                'Laravel',
                'PHP',
                'TypeScript'
            ],
            links: [
                {
                    title: 'View',
                    href: 'https://quickminutes.com'
                }
            ]
        },
        {
            id: 2,
            title: 'Data Interoperability',
            subTitle: 'Interoperability Of Cloud Monitoring Data (FYP)',
            text: 'This project addresses the challenge of incompatible data interchange formats in cloud monitoring ' +
                  'data.<br><br> Published in the 2016 5th IEEE International Conference on Cloud Networking ' +
                  '(CloudNet).',
            technologies: [
                'Java',
                'RabbitMQ'
            ],
            links: [
                {
                    title: 'GitHub',
                    href: 'https://github.com/Martin-Bullman/interoperability-of-cloud-monitoring-Data/tree/main'
                },
                {
                    title: 'Publication',
                    href: '/documents/management_for_federated_cloud_services.pdf'
                }
            ]
        },
        {
            id: 3,
            title: 'TheStoryOf',
            subTitle: 'Leave Behind More Than Just Memories',
            img: {
                href: '/img/projects/thestoryof_banner.webp',
                alt: 'TheStoryOf banner image'
            },
            text: 'Capture you or your loved ones stories and safeguard them on a dedicated webpage. Share' +
                  'them with a QR code. <br><br> Digital profiles are accessible by QR code on an aluminium plate, ' +
                  'letting anyone access treasured memories.',
            technologies: [
                'Azure',
                'VueJS',
                'Vuetify',
                'Laravel',
                'PHP',
                'TypeScript'
            ],
            links: [
                {
                    title: 'View',
                    href: 'https://www.thestoryof.io/'
                }
            ]
        },
        {
            id: 4,
            title: 'Taoglas Crowd Insights',
            subTitle: 'People Movement Analytics',
            img: {
                href: '/img/projects/taoglas_banner.webp',
                alt: 'Taoglas banner image'
            },
            text: 'Platform to monitor and manage crowds via existing Wi-Fi infrastructure or hotspots, both ' +
                  'indoors and outdoors. <br><br> Provides real-time insights and alerts on crowds and queuing ' +
                  'situations with reports via a city/enterprise dashboard.',
            technologies: [
                'AWS',
                'PHP',
                'JavaScript',
                'HTML',
                'CSS'
            ],
            links: [
                {
                    title: 'View',
                    href: 'https://crowdinsights.taoglas.com/'
                }
            ]
        },
        {
            id: 5,
            title: 'WatchBots',
            subTitle: 'The next generation of bot detection.',
            text: 'Our goal is to provide our clients with the deepest possible insight into their users.<br><br>' +
                  'We do this using a mixture of traditional fingerprint techniques, behaviour detection' +
                  'and side channel detection.',
            technologies: [
                'AWS',
                'Python',
                'Django',
                'JavaScript'
            ],
            links: [
                {
                    title: 'View',
                    href: 'https://watch-bots.com/'
                }
            ]
        },
        {
            id: 6,
            title: 'Intel Galileo Project',
            subTitle: 'Multi Agenda Decision Making Over Wireless Networks',
            text: 'This research project addresses real-time decision-making using wireless networks and Intel ' +
                  'Galileo microcontrollers. <br><br> Published in the 2014 Insight Center for Data Analytics ' +
                  'Conference.',
            technologies: [
                'Python',
                'Bash',
                'Git'
            ],
            links: [
                {
                    title: 'GitHub',
                    href: 'https://github.com/Martin-Bullman/multi-agenda-decision-making-over-wireless-networks'
                },
                {
                    title: 'Publication',
                    href: '/documents/multi_agent_decision_making_over_wireless_networks_paper.pdf'
                },
                {
                    title: 'Poster',
                    href: '/documents/multi_agent_decision_making_over_wireless_networks_poster.pdf'
                }
            ]
        },
        {
            id: 7,
            title: 'Wagerr',
            subTitle: 'Decentralised Sports Book Powered by Blockchain',
            img: {
                href: '/img/projects/wagerr_banner.webp',
                alt: 'Wagerr banner image'
            },
            text: 'Wagerr is a decentralized sports book that brings trustless sports betting to the entire world. ' +
                  '<br><br> Because Wagerr has the lowest juice in the world, bettors get a bigger edge when they ' +
                  'bet on the Wagerr network.',
            technologies: [
                'Google Cloud',
                'C++',
                'Vue',
                'JavaScript'
            ],
            links: [
                {
                    title: 'View',
                    href: 'https://wagerr.com'
                },
                {
                    title: 'GitHub',
                    href: '/documents/multi_agent_decision_making_over_wireless_networks_poster.pdf'
                },
                {
                    title: 'Whitepaper',
                    href: '/documents/wagerr_white_paper_v1.pdf'
                },
            ]
        },
        {
            id: 8,
            title: 'Dash Boost',
            subTitle: 'Dash DOA Micro Proposals',
            chips: ['Discontinued'],
            text: 'Dash Boost enables community members to submit micro proposals to the ' +
                  'treasury with a reduced proposal fee. <br><br> A micro proposal is a ' +
                  'mechanism to enable low budget proposals access funds from the Dash DOA.',
            technologies: [
                'HTML',
                'CSS',
                'JavaScript'
            ],
            links: [
                {
                    title: 'View',
                    href: 'https://dropmagnet.com/'
                }
            ]
        },
        {
            id: 9,
            title: 'Drop Magnet',
            subTitle: 'NFT Marketplace',
            text: 'The all-in-one, multi-chain, NFT marketplace aggregator and utility-adding ' +
                  'platform. <br><br> Discover NFTs from verified collections and build your web3 ' +
                  'social page with DropSwipe.',
            technologies: [
                'Solidity',
                'React',
                'JavaScript'
            ],
            links: [
                {
                    title: 'View',
                    href: 'https://dropmagnet.com/'
                }
            ]
        },
        {
            id: 10,
            title: 'TechSquad',
            subTitle: 'Blockchain Development',
            chips: ['Discontinued'],
            text: 'TechSquad specializes in blockchain development, harnessing the power of ' +
                  'decentralized technology. <br><br> Driving innovation and value by offering ' +
                  'expertise in smart contracts, DApp development, and other blockchain solutions.',
            technologies: [
                'HTML',
                'CSS',
                'JavaScript'
            ],
            links: [
                {
                    title: 'View',
                    href: 'https://dropmagnet.com/'
                }
            ]
        },
    ]

    return { projects }
}
