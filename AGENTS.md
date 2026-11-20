# CCNA SimuLab Academy
Personal French-language CCNA 200-301 training platform inspired by scenario-based learning. Original content only; no exam dumps. Verify current Cisco official exam blueprint and map all objectives before claiming coverage.

## Stack
Next.js App Router, TypeScript, Tailwind CSS, accessible responsive interface, SVG or React Flow diagrams, MDX or typed lesson content. Local-first progress for MVP; optional Supabase Auth and RLS-backed per-user progress for online release. Vercel deployment. Never commit secrets or personal learner records. No fake authentication or simulated results presented as real.

## Curriculum (100 days, 300 hours)
1. Days 1–7: equipment, LAN/WAN/WLAN, architectures and topologies, OSI, TCP/IP, encapsulation, Ethernet/media/PoE, MAC/ARP, TCP/UDP/ICMP.
2. Days 8–17: binary, IPv4, CIDR, subnetting, VLSM, gateways and troubleshooting.
3. Days 18–22: Cisco IOS CLI, interfaces, SSH, backups.
4. Days 23–32: switching, VLAN, trunks, inter-VLAN routing, CDP/LLDP.
5. Days 33–39: STP, Rapid PVST+, guards, EtherChannel/LACP.
6. Days 40–49: routing table, longest prefix, static/default/floating routes, OSPF, FHRP and troubleshooting.
7. Days 50–55: IPv6 addressing, NDP, SLAAC, static routing, dual stack.
8. Days 56–64: DHCP, DNS, NAT/PAT, NTP, SNMP, syslog, QoS.
9. Days 65–74: network security, ACL, port security, DHCP snooping, DAI, AAA, VPN.
10. Days 75–80: wireless standards, RF, AP/WLC, WPA2/3, WLAN configuration.
11. Days 81–89: virtualization, SDN, REST/JSON, Python, Ansible, Terraform, AI.
12. Days 90–100: integrated project, troubleshooting, timed mock exams and remediation.

## Lesson contract
Every complete lesson: objectives, NovaTech client briefing, detailed French explanations and English vocabulary, labeled topology, guided Packet Tracer lab with addressing and commands explained, expected output, independent challenge, break/fix ticket, flashcards and keyed quiz with explanations. Include prerequisites and limits of simulations. Never mark placeholders as completed lessons.
Day 1: two PCs 192.168.1.10/24 and .20/24 on 2960 switch; ping and equipment quiz.
Day 2: two LANs 192.168.1.0/24 and 192.168.2.0/24, routers .1 on each LAN, WAN 10.0.0.0/30, static routes both directions; disable WAN interface for troubleshooting. Cover two-tier, three-tier, spine-leaf and redundancy.
Day 3: OSI and encapsulation.

## Features and acceptance
Dashboard, curriculum navigation, lesson reader, interactive diagrams, quiz scoring and feedback, flashcard spaced review, lab checklist, notes, searchable glossary, progress export/import. Eventually 100+ labs and 10 original mock exams. Track theory and practical evidence separately. Optional AI tutor only with server-side API key and authentication. No guaranteed pass claims.
Run lint, typecheck, tests and production build; add accessibility and mobile checks. Document install and deployment. Keep public repository free of personal data. Work in small reviewable commits. 
