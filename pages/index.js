import Head from 'next/head'
import Image from 'next/image'


export default function Home() {
  return (
    <>
  <main className="font-firago hyphens-manual bg-repeat bg-bianchi-light w-full h-full text-primary-100 heropattern-hideout-bianchi-dark">

    { /* Page */ }
    <div className="p-6 mx-auto page max-w-2xl print:max-w-letter md:max-w-letter md:h-letter xsm:p-8 sm:p-9 md:p-16 bg-white">

      { /* Name */ }
      <header className="flex items-center mb-8 md:mb-11">
      <div   className="profilepic-container mr-5 text-base leading-none text-white font-medium print:bg-black px-3"
styles="padding-bottom: 0.6875rem; padding-top: 0.6875rem; /*11px*/">
        <Image src="profilepic.png" width="160px" height="160px" />
      </div>
        <h1 className="text-3xl font-semibold text-gray-750 pb-px">
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
                  Sr. Systems Engineer
                </h3>
                <p className="leading-normal text-md text-gray-650">
                  
                </p>
              </header>
              <p className="mt-2.1 text-md text-gray-700 leading-normal">
              Sr. Systems Engineer with extensive experience in cloud architecture, POSIX-based systems, SAN/NAS storage, networking, and virtualization. Committed to deploying resilient architecture, providing excellent customer service, and to lifelong learning of technology.
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
                Designed, deployed, and maintained cloud infrastructure for clients utilizing Amazon Web Services and Microsoft Azure. Trained engineering team on AWS and Azure.

      
              </li>
              <li className="mt-2.1 text-md text-gray-700 leading-normal">
                <span className="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">›</span>
                Utilized Infrastructure-as-code and configuration management tools including Terraform and Ansible.
              </li>
              <li className="mt-2.1 text-md text-gray-700 leading-normal">
                <span className="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">›</span>
                Developed CI/CD workflows for deploying client infrastructure, and trained engineering team on usage of GitHub, GitHub actions, and Git.

              </li>
              <li className="mt-2.1 text-md text-gray-700 leading-normal">
                <span className="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">›</span>
                Designed, deployed, and maintained VMware vSphere solutions with vSAN and other block-based storage (Unity, Powerstore, VNX, XtremIO, and NetApp E-Series) and solutions using DellEMC VxRail (hyper converged).
              </li>
              <li className="mt-2.1 text-md text-gray-700 leading-normal">
                <span className="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">›</span>
                Designed, deployed, and maintained vendor-provided NAS-based storage solutions (DellEMC Isilon/PowerScale, NetApp FAS, Quantum Xcellis DLC).
              </li>
              <li className="mt-2.1 text-md text-gray-700 leading-normal">
                <span className="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">›</span>
                Designed, deployed, and maintained network solutions and oversaw network cutovers, ensuring proper planning and execution (Arista, Cisco, DellEMC, and Broadcom based switching—Cisco vPC, Arista VxLAN, Arista MLAG, DellEMC ViLT, vPC+HSRP, MLAG+VRRP/VARP for first-hop routing).
              </li>
              <li className="mt-2.1 text-md text-gray-700 leading-normal">
                <span className="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">›</span>
                Designed, deployed, and maintained Microsoft Active Directory environments, utilizing AD Sites and Services, Group Policy, AD Certificate Services, DHCP and DNS.
              </li>
              <li className="mt-2.1 text-md text-gray-700 leading-normal">
                <span className="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">›</span>
                Developed advanced Linux solutions for clients (automated SSSD-based domain joining, advanced dnsmasq and systemd-networkd configurations, development of CY2020 VFX image for Marvel, etc).
              </li>
              <li className="mt-2.1 text-md text-gray-700 leading-normal">
                <span className="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">›</span>
                Deployed and configured hardware and VM-based Palo Alto series firewalls both on-premises and in cloud (Azure multi-virtual network) deployments. Deployed F5 LTM load balancers. Implemented IPsec site-to-site tunnels.
              </li>
              <li className="mt-2.1 text-md text-gray-700 leading-normal">
                <span className="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">›</span>
                Developed Python scripts to automate manual tasks for storage migrations and other use cases.
              </li>
              <li className="mt-2.1 text-md text-gray-700 leading-normal">
                <span className="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">›</span>
                Developed clear and concise documentation for project deployment processes and other tasks, growing internal company knowledge-base.
              </li>
              <li className="mt-2.1 text-md text-gray-700 leading-normal">
                <span className="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">›</span>
                Maintained internal infrastructure at colocation facility and warehouse laboratory environment.
              </li>
              <li className="mt-2.1 text-md text-gray-700 leading-normal">
                <span className="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">›</span>
                Trained junior engineers quickly across multiple technology sets and in providing quality customer-service.
              </li>
              <li className="mt-2.1 text-md text-gray-700 leading-normal">
                <span className="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">›</span>
                Provided technical project management and developed Gantt chart templates for common deployments. Trained project management team in use of Smartsheet and use of Gantt charts.
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
                Maintained VMWare vSphere 6 infrastructure on Cisco UCS hardware
              </li>
              <li className="mt-2.1 text-md text-gray-700 leading-normal">
                <span className="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">›</span>
                Architected and deployed 288 node HPC cluster on UCS B and C-series blades/servers and Fabric Interconnects. Enabled RDMA-based inter-node communication (usNIC vNIC utilizing SRIOV).
              </li>
              <li className="mt-2.1 text-md text-gray-700 leading-normal">
                <span className="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">›</span>
                Implemented CentOS based node provisioning method via xCAT.
              </li>
              <li className="mt-2.1 text-md text-gray-700 leading-normal">
                <span className="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">›</span>
                Designed and implemented complete Puppet infrastructure for post-deploy configuration of HPC cluster with Prod/Dev CI environments utilizing internal Gitlab and Puppet R10k.
              </li>
              <li className="mt-2.1 text-md text-gray-700 leading-normal">
                <span className="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">›</span>
                Configured and maintained NAS (Isilon) and block storage (VNX/XtremIO).
              </li>
              <li className="mt-2.1 text-md text-gray-700 leading-normal">
                <span className="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">›</span>
                Configured and maintained various Cisco Nexus switches (5548, 9504) for core switching and routing (vPC, HSRP).
              </li>
              <li className="mt-2.1 text-md text-gray-700 leading-normal">
                <span className="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">›</span>
                Implemented Grid Engine scheduler (SoGE) system with MPI queues.
              </li>
              <li className="mt-2.1 text-md text-gray-700 leading-normal">
                <span className="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">›</span>
                Designed/implemented Elasticsearch logging and analytics infrastructure with Redis cache layer.
              </li>
              <li className="mt-2.1 text-md text-gray-700 leading-normal">
                <span className="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">›</span>
                Wrote python and bash scripts to automate workflows.
              </li>
              <li className="mt-2.1 text-md text-gray-700 leading-normal">
                <span className="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">›</span>
                Accounted for 52% of highly technical service tickets (1834) on a team of three. Tickets included handling research software configuration and compilation requests (C/C++ software via GCC/Makefiles and CMake, Python, R, etc.).
              </li>
              <li className="mt-2.1 text-md text-gray-700 leading-normal">
                <span className="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">›</span>
                Held workshops for faculty, staff, and students to teach them about Linux fundamentals and creation of job scripts.
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
                Certificate ID #9K86FSEKZMV4QMCD
              </p>
            </section>

            <section className="mb-4.5 break-inside-avoid">
              <header>
                <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
                  <a href="https://aws.amazon.com/certification/certified-solutions-architect-associate/" className="group">
                    AWS Cloud Practitioner 
                    <span className="inline-block text-gray-550 print:text-black font-normal group-hover:text-gray-700 transition duration-100 ease-in">↗</span>
                  </a>
                </h3>
                <p className="leading-normal text-md text-gray-650">
                  August 2022 - August 2025
                </p>
              </header>
              <p className="mt-2.1 text-md text-gray-700 leading-normal">
                Certificate ID #EDSS1XGKZNB1193F
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
                  RHEL/CentOS
                </li>
                <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                  Debian
                </li>
                <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                  LVM
                </li>
                <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                  Apache/nginx
                </li>
                <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                  MySQL/PgSQL
                </li>
                <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                  SSSD
                </li>
                <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                  Systemd
                </li>
                <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                  SW Compilation
                </li>
                <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                  Yum/dnf
                </li>
                <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                  Apt
                </li>
                <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                  NFSv3/4
                </li>
                <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                  Samba
                </li>
                <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                  chrony/ntpd
                </li>
                <li className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200">
                  netplan/systemd-networkd
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
