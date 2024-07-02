export function usePublications(): object {

    const publications: object[] = [
        {
            id: 1,
            year: '2016',
            title: '2016 5th IEEE International Conference on Cloud Networking (Cloudnet)',
            text: 'Vincent C. Emeakaroha, Martin J. Bullman, John P. Morrison (2016) Towards ' +
                  'Automated Cost-Efficient Data Management for Federated Cloud Services 2016 ' +
                  '5th IEEE International Conference on Cloud Networking ' +
                  '(Cloudnet) Pisa, Italy,',
            links: [
                {
                    title: 'Publication',
                    icon: 'fa-regular fa-file-pdf',
                    label: 'Publication',
                    href: '/documents/management_for_federated_cloud_services.pdf'
                },
                {
                    title: 'IEEE Conference',
                    icon: 'fa-solid fa-link',
                    label: 'IEEE Conference',
                    href: 'https://ieeexplore.ieee.org/document/7776594'
                },
                {
                    title: 'Source Code',
                    icon: 'fa-brands fa-github',
                    label: 'Source Code',
                    href: 'https://github.com/mjbullman/interoperability-of-cloud-monitoring-data'
                }
            ]
        },
        {
            id: 2,
            year: '2014',
            title: '2014 Insight SFI Research Center For Data Analytics Student Conference (DCU)',
            text: 'Martin J. Bullman, Kenneth N. Brown, Mohamed Wahbi (2014) Multi-Agent ' +
                  'Decision Making Over Wireless Networks 2014 Insight SFI Research Center ' +
                  'For Data Analytics Student Conference (DCU) Dublin, Ireland',
            links: [
                {
                    title: 'Publication',
                    icon: 'fa-regular fa-file-pdf',
                    label: 'Publication',
                    href: '/documents/multi_agent_decision_making_over_wireless_networks_paper.pdf'
                },
                {
                    title: 'Poster',
                    icon: 'fa-regular fa-file-pdf',
                    label: 'Poster',
                    href: '/documents/multi_agent_decision_making_over_wireless_networks_poster.pdf'
                },
                {
                    title: 'Source Code ',
                    icon: 'fa-brands fa-github',
                    label: 'Source Code',
                    href: 'https://github.com/mjbullman/multi-agenda-decision-making-over-wireless-networks?tab=readme-ov-file'
                }
            ]
        }
    ]

    return { publications }
}
