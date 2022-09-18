import Head from 'next/head'
import Image from 'next/image'


export default function Home() {
  return (
    <>
  <main className="font-firago hyphens-manual">

    { /* Page */ }
    <div className="p-6 mx-auto page max-w-2xl print:max-w-letter md:max-w-letter md:h-letter xsm:p-8 sm:p-9 md:p-16 bg-white">

      { /* Name */ }
      <header className="flex items-center mb-8 md:mb-11">
        <div   className="initials-container mr-5 text-base leading-none text-white bg-gray-700 font-medium print:bg-black px-3"
          styles="padding-bottom: 0.6875rem; padding-top: 0.6875rem; /*11px*/">
          <div className="initial text-center" styles="padding-bottom: 0.1875rem; /*3px*/">Y</div>
          <div className="text-center initial">N</div>
        </div>
        <h1 className="text-2xl font-semibold text-gray-750 pb-px">
          Yama Nawabi
        </h1>
      </header>
      { /* end Name */ }

      { /* Column */ }
      <div className="md:col-count-2 print:col-count-2 col-gap-md md:h-letter-col print:h-letter-col col-fill-auto">

        <section className="mt-8 first:mt-0">

          { /*  To keep in the same column */ }
          <div className="break-inside-avoid">

            <h2 className="mb-4 font-bold tracking-widest text-sm2 text-gray-550 print:font-normal">
              SUMMARY
            </h2>

            <section className="mb-4.5 break-inside-avoid">
              <header>
                <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
                  Jack of all trades
                </h3>
                <p className="leading-normal text-md text-gray-650">
                  
                </p>
              </header>
              <p className="mt-2.1 text-md text-gray-700 leading-normal">
                Summary text.
              </p>
            </section>

          </div>

        </section>

        <section className="mt-8 first:mt-0">

        { /* To keep in the same column */ }
          <div className="break-inside-avoid">

            <h2 className="mb-4 font-bold tracking-widest text-sm2 text-gray-550 print:font-normal">
              EXPERIENCE
            </h2>
          </div>

          <div className="break-inside-avoid">
          <section className="mb-4.5 break-inside-avoid">
            <header>
              <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
                Integrated Media Technologies
              </h3>
              <p className="leading-normal text-md text-gray-650">
                Mar 2017 – Current | Sr. Systems Engineer - Team Lead
              </p>
            </header>
            <ul className="">

              <li className="mt-2.1 text-md text-gray-700 leading-normal">
                <span className="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">›</span>
                Developed tools and documentation necessary to streamline project deployment processes and grow internal company knowledgebase.
      
              </li>
              <li className="mt-2.1 text-md text-gray-700 leading-normal">
                <span className="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">›</span>
                Trained junior engineers quickly across multiple technology sets and in customer service skills.
              </li>
              <li className="mt-2.1 text-md text-gray-700 leading-normal">
                <span className="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">›</span>
                Provided infrastructure and workflow consultation services to a large number of M&E clients. Helped actualize sales opportunities. Gained experience managing projects from discovery to implementation to project closure
              </li>
              <li className="mt-2.1 text-md text-gray-700 leading-normal">
                <span className="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">›</span>
                Migrated clients from on-premise to both hybrid and cloud-first AWS and Azure deployments, some using Terraform
              </li>
              <li className="mt-2.1 text-md text-gray-700 leading-normal">
                <span className="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">›</span>
                Oversaw numerous storage and network cutovers, ensuring proper planning and execution
              </li>
              <li className="mt-2.1 text-md text-gray-700 leading-normal">
                <span className="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">›</span>
                Deployed a wide array of networking equipment (Cisco, Arista, and others) in layer 2 and layer 3 configurations (Arista VxLAN and VARP, Cisco vPC+HSRP)
              </li>
              <li className="mt-2.1 text-md text-gray-700 leading-normal">
                <span className="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">›</span>
                Deployed and configured hardware and VM-based Palo Alto series firewalls both on-premises and in cloud deployments.
              </li>
              <li className="mt-2.1 text-md text-gray-700 leading-normal">
                <span className="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">›</span>
                Led F5 LTM load balancer deployment for a large digital media distribution and software company, allowing for a significant decrease in time to delivery to some of the biggest production studios (Apple, Amazon Studios, etc.)
              </li>
              <li className="mt-2.1 text-md text-gray-700 leading-normal">
                <span className="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">›</span>
                Provided advanced configuration for storage appliances (Isilon, Xcellis, VNX, Unity) and topical configuration for NetApp and Quantum based storage
              </li>
              <li className="mt-2.1 text-md text-gray-700 leading-normal">
                <span className="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">›</span>
                Deployed and configured VxRail and other solutions utilizing VMware vSphere
              </li>
            </ul>
          </section>

          <section className="mb-4.5 break-inside-avoid">
            <header>
              <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
                USC Stevens Neuroimaging and Informatics Institute
              </h3>
              <p className="leading-normal text-md text-gray-650">
                Mar 2013 – Mar 2017 | Systems Engineer
              </p>
            </header>
            <ul className="">
              <li className="mt-2.1 text-md text-gray-700 leading-normal">
                <span className="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">›</span>
                Cisco
              </li>
              <li className="mt-2.1 text-md text-gray-700 leading-normal">
                <span className="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">›</span>
                HPC.
              </li>
            </ul>
          </section>
          </div>

        </section>

        <section className="mt-8 first:mt-0">

          {/* To keep in the same column */ }
          <div className="break-inside-avoid">

            <h2 className="mb-4 font-bold tracking-widest text-sm2 text-gray-550 print:font-normal">
              EDUCATION
            </h2>

            <section className="mb-4.5 break-inside-avoid">
              <header>
                <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
                  University of California, Los Angeles
                </h3>
                <p className="leading-normal text-md text-gray-650">
                  2009 – 2013 | B.S. Neuroscience
                </p>
              </header>
            </section>

          </div>
        </section>

        <section className="mt-8 first:mt-0">

          { /*  To keep in the same column */ }
          <div className="break-inside-avoid">

            <h2 className="mb-4 font-bold tracking-widest text-sm2 text-gray-550 print:font-normal">
              CERTIFICATIONS
            </h2>

            <section className="mb-4.5 break-inside-avoid">
              <header>
                <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
                  <a href="https://aws.amazon.com/certification/certified-solutions-architect-associate/" className="group">
                    AWS Certified Solutions Architect - Associate
                    <span className="inline-block text-gray-550 print:text-black font-normal group-hover:text-gray-700 transition duration-100 ease-in">↗</span>
                  </a>
                </h3>
                <p className="leading-normal text-md text-gray-650">
                  August 2022 - August 2025
                </p>
              </header>
              <p className="mt-2.1 text-md text-gray-700 leading-normal">
                Certificate ID# .
              </p>
            </section>

          </div>

          <section className="mb-4.5 break-inside-avoid">
            <header>
              <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
                <a href="https://www.hashicorp.com/certification/terraform-associate" className="group">
                  Hashicorp Terraform Associate
                  <span
                    className="inline-block text-gray-550 print:text-black font-normal group-hover:text-gray-700 transition duration-100 ease-in">↗</span>
                </a>
              </h3>
              <p className="leading-normal text-md text-gray-650">
                Sept 2022 - Sept 2025
              </p>
            </header>
            <p className="mt-2.1 text-md text-gray-700 leading-normal">
              Certification ID# .
            </p>
          </section>

          <section className="mb-4.5 break-inside-avoid">
              <header>
                <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
                  <a href="https://www.vmware.com/learning/certification/vcp-dcv.html" className="group">
                    VMware VCP - Data Center Virtualization 2019
                    <span className="inline-block text-gray-550 print:text-black font-normal group-hover:text-gray-700 transition duration-100 ease-in">↗</span>
                  </a>
                </h3>
                <p className="leading-normal text-md text-gray-650">
                  2019 - Current
                </p>
              </header>
              <p className="mt-2.1 text-md text-gray-700 leading-normal">
                Certificate ID# .
              </p>
            </section>

        </section>

        <section className="mt-8 first:mt-0">

          { /*  To keep in the same column */ }
          <div className="break-inside-avoid">

            <h2 className="mb-4 font-bold tracking-widest text-sm2 text-gray-550 print:font-normal">
              SKILLS
            </h2>

            <section className="mb-4.5 break-inside-avoid">
              <header>
                <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
                  Microsoft Infrastructure
                </h3>
                { /** <p className="leading-normal text-md text-gray-650">
                  Middle Level
                </p> **/ }
              </header>
              <p className="mt-2.1 text-md text-gray-700 leading-normal">
                Experienced with multi-domain forests utilizing AD Sites & Services, administration of Kerberos SPNs for secure service based accounts, deployment of CAs, Network Policy Server, and configuration of Distributed File System (DFS)
              </p>
              <div className="my-3.2 last:pb-1.5">
                <ul className="flex flex-wrap text-md leading-relaxed -mr-1.6 -mb-1.6">
                  <li
                    className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                    LDAP
                  </li>
                  <li
                    className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                    DNS
                  </li>
                  <li
                    className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                    DHCP
                  </li>
                  <li
                    className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                    Kerberos
                  </li>
                  <li
                    className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                    NPS
                  </li>
                  <li
                    className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                    AD CA
                  </li>
                  <li
                    className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                    DFS
                  </li>
                  <li
                    className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                    Multi-site
                  </li>
                  <li
                    className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                    FSMO
                  </li>
                  <li
                    className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                    GPO
                  </li>
                </ul>
              </div>
            </section>

          </div>

          <section className="mb-4.5 break-inside-avoid">
            <header>
              <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
                Linux/BSD Infrastructure
              </h3>
            </header>
            <p className="mt-2.1 text-md text-gray-700 leading-normal">
                Experienced with RHEL-based and Debian-based distributions, implementation, configuration, and troubleshooting of Apache httpd and Tomcat, MySQL/MariaDB, PGSQL, Redis, Elasticsearch (ELK), Rsyslog, haproxy, NFS and block based storage (LVM), integration with AD via SSSD
              </p>
            <div className="my-3.2 last:pb-1.5">
              <ul className="flex flex-wrap text-md leading-relaxed -mr-1.6 -mb-1.6">
                <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                  CSS
                </li>
                <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                  Rust
                </li>
                <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                  Git
                </li>
                <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                  Go
                </li>
                <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                  Linux Server
                </li>
                <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                  UI Design
                </li>
                <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                  Photoshop
                </li>
                <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                  Illustrator
                </li>
                <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                  Figma
                </li>
                <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                  Typography
                </li>
              </ul>
            </div>
          </section>

        </section>

        <section className="mt-8 first:mt-0">

          { /*  To keep in the same column */ }
          <div className="break-inside-avoid">

            <h2 className="mb-4 font-bold tracking-widest text-sm2 text-gray-550 print:font-normal">
              CONTACT
            </h2>

            <section className="mb-4.5 break-inside-avoid">
              <ul className="list-inside pr-7">
                <li className="mt-1.5 leading-normal text-gray-700 text-md">
                  <a href="//yamanawabi.com" className="group">
                    yamanawabi.com
                    <span className="inline-block text-gray-550 print:text-black font-normal group-hover:text-gray-700 transition duration-100 ease-in">↗</span>
                  </a>
                </li>
                <li className="mt-1.5 leading-normal text-gray-700 text-md">
                  <a href="//twitter.com/yamanawabi" className="group">
                    twitter.com/yamanawabi
                    <span className="inline-block text-gray-550 print:text-black font-normal group-hover:text-gray-700 transition duration-100 ease-in">↗</span>
                  </a>
                </li>
                <li className="mt-1.5 leading-normal text-gray-700 text-md">
                  Pasadena, California
                </li>
                <li className="mt-1.5 leading-normal text-gray-700 text-md">
                  mknawabi@gmail.com
                </li>
              </ul>
            </section>

          </div>

        </section>

      </div>
      { /* end Column */ }

    </div>
    { /* end Page */ }

  </main>
    </>
  )
}
