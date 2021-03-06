~~~
title: Why We Are Building the Internet of Blockchains
slug: purpose-of-cosmos
date: 2017-01-05
author: Jae Kwon & Ethan Buchman
excerpt: Cosmos is a culmination of lessons of prior cryptocurrencies. It's designed to be extended to incorporate future innovations. It's a distributed ledger platform suitable for generations to come.
~~~

One of the great tragedies of cryptocurrencies has been the failure to
interoperate with one another.  Cryptocurrency platforms are competing for
dominance with their own, largely incompatible technical roadmaps. It's as if
each blockchain consensus system with its own community is too sovereign for
its own good.

Mechanisms like [atomic swaps](https://en.bitcoin.it/wiki/Atomic_cross-chain_trading) between chains can
certainly help to link communities. However, where there are no technical
issues, they often suffer from a need for mature liquidity markets and active
participants on each side. Thus the "altcoin" ecosystem is an alchemical soup
of enthusiasts experimenting in various ways. Many possess new designs and
convictions, yet often each stands alone, siloed by the lack of a general
inter-blockchain communication system.

Ethereum sought to address this problem, somewhat indirectly, by inventing a
new platform for computation. Ethereum allows arbitrary financial systems to be
written against a common virtual machine using a common development
environment. Presuming all new cryptocurrencies launch on Ethereum, they will
have some capacity for interoperability. 

Ethereum is in fact a wonderful idea. Its design decisions are motivated by
important considerations such as the need for a simple specification and
guaranteed determinism. However, it neglects elements such as the difficulty of
designing a secure general purpose programming environment. This means Ethereum
has its own sovereignty problem, as it excludes developers who want access to
the platform but want alternatives to the current [state transition machine](https://en.wikipedia.org/wiki/Finite-state_machine).

Ethereum also doesn’t address the problem of turning fiat currency into
fungible tokens, short of having banks and government bodies issue currency on
Ethereum itself. While many institutions are investigating the Ethereum
blockchain, there are both scalability and governance concerns which ultimately
restrict full-scale adoption. This may impede integration with existing systems
and currencies.

Much like communities, companies and nation-states, each existing
cryptocurrency is born with the seed of some cultural ideal. Bitcoin is
decidedly libertarian, with a slight anarchist leaning. Ethereum is less a
political statement and more an avant-garde academic exercise in distributed
systems, computer science and contract theory. Dogecoin is a testament to the
capacity for humans to bond over the absurd, a phenomenon more commonly known
as “being social”. Steem offers a more structured version of this same
behavior, with a basis in content production and curation. 

And so on, down the line. But there are many more viewpoints in the world, each
doubtlessly wanting a unique experiment in the intersection between governance,
culture and economics. It would be a tragedy for all these experiments to be so
rigidly siloed from one another by great chasms of incompatibility. 

Clearly, what is needed is something that can integrate the states of existing
blockchains. Something that can interface in a sane manner with everything from
novelty rewards points to currencies issued by nation-states. Something for
formalizing relationships between systems, without compromising independence.
Something with extreme flexibility without compromising security.

Enter Cosmos, the "Internet of Blockchains". Cosmos is a network and a
framework for interoperability between blockchains. It consists of a web of
hubs and zones, where each zone is effectively an independent blockchain with
an arbitrary cryptocurrency design (such as Bitcoin, Ethereum, ZeroCash,
CryptoNote, your local banking institution, etc.). Each hub is a multi-asset
cryptocurrency that facilitates interoperability between some set of zones.

Hubs and zones are powered by the Tendermint Proof-of-Stake (TMSP) consensus
algorithm, using the TMSP interface to host applications written in any
programming language. TMSP permits enormous flexibility in application design
and enables the application to inherit the security features of a
Tendermint-powered blockchain. In fact, Cosmos is compatible with any Byzantine
Fault Tolerant system, which is the basis of Tendermint itself. 

Zones communicate with one another through a hub, primarily in the form of
asymmetric transfer of some set of tokens from one zone to another.
Effectively, a hub is a blockchain with many sidechains, but using PoS instead
of PoW leads to a dramatic reduction in overhead without sacrificing security.
Each zone acts as a light client for the hub, and the hub acts as a light
client for all its zones. Tendermint makes this efficient with compact light
client proofs that are secure so long as the validator set is known. This can
be achieved by ensuring the light client synchronizes with validator set
changes at least as often as they are permitted to occur.

Cosmos makes no distinction between hubs. There is no top hub and the most
popular or successful hub is a matter of adoption by zones. Furthermore, there
is no fundamental distinction between zones and hubs, such that any zone with
sufficient functionality can become a hub. Cosmos will release one particular
hub in order to get things started, the aptly named Adam hub. There is nothing
stopping this hub from becoming obsolete, or stopping the likes of Bitcoin or
Ethereum from competing with it and potentially replacing it.

Cosmos thus introduces a new kind of market dynamic that formalizes the
friction points between various cryptocurrency offerings. It demolishes
barriers to interoperability by enabling competition between hubs to contribute
to the economic security of each hub itself. Validators who misbehave will be
abandoned for better behaving ones. The result is a heterogeneous network -- an
Internet of Blockchains -- adapting for each community and each locale
according to its needs, all while retaining a backbone of interoperability. The
goal is keeping barriers to entry low while holding stewards of the system
accountable.

Cosmos’ potential is building synergy and unlocking the power that exists in
every cryptocurrency. As operators in one particular echo chamber of consensus
systems design, Cosmos believes interoperability is the key to unlocking the
collective developments of this industry. With the Internet of Blockchains,
companies and individuals can utilize the services of one chain, without
abandoning their existing investments in another. This creates a world that is
fairer, more functional and better secured. This is a call for an end to echo
chambers, and the beginning of bridge-building.

