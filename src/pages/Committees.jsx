import { useRef } from "react";
import styles from "./Committees.module.css";
import Collapse from "bootstrap/js/dist/collapse";
import { useEffect } from "react";

const Committees = () => {
    return (
        <div className="committees">
            Committees (Swedish: <em>nämnder</em>) are groups inside the chapter
            that dedicate themselves to some part of chapter life, such as
            student overall culture, sports, chapter management, parties, etc.
            They are most important and as such we describe the committees of
            the Computer Science (CS) and Media Technology here. Some committees
            are shared between the Computer Science and Media Technology
            chapters and are listed below. Others are chapter-specific, so CS's
            Study Board is not the same committee as Media's Study Board.
            <ChapterBelonging belonging="CS-Media committees" />
            <p>
                <em>
                    The following committees are shared between both the
                    Computer Science chapter and the Media Technology chapter.
                    Students from both chapters can participate!
                </em>
            </p>
            <div className="committee-info">
                <InternationalCommittee />
                <DEMON />
                <QultureCommittee />
                <METAdorerna />
                <MetaSpexet />
            </div>
            <ChapterBelonging belonging="CS committees" />
            <div className="committee-info">
                <EqualityCommittee />
                <DKM />
                <TagMonkeys />
                <Ada />
                <Datasladden />
                <DESC />
                <DJulkalendern />
                <DAre />
                <ElectionCommittee />
                <GUDAR />
                <ProjectPride />
                <Prylis />
                <EditorialBoard />
                <Scala />
                <STUDS />
                <StudyBoard />
                <BakingCommittee />
                <NLG />
                <IOR />
                <SportsCommittee />
            </div>
            <ChapterBelonging belonging="Media committees" />
            <div className="committee-info">
                <Styrelsen />
                <MediaElectionCommittee />
                <MediaStudyBoard />
                <KomN />
                <MBD />
                <MediaNLG />
                <Festmästeriet />
                <FilmCommittee />
                <PhotoGroup />
                <MediaSportsCommittee />
                <Matlaget />
                <MediaMärkt />
                <MKM />
                <Sånglederiet />
            </div>
        </div>
    );
};

function ChapterBelonging({ belonging }) {
    return <h2>{belonging}</h2>;
}

const Committee = ({ name, children }) => {
    const id = name.toLowerCase().replace(/[^A-Za-z]/g, "-");
    const headerId = id + "-header";
    const collapseId = id + "-collapse";
    const collapseRef = useRef(null);

    useEffect(() => {
        if (collapseRef.current) {
            new Collapse(collapseRef.current, { toggle: false });
        }
    }, [collapseRef]);
    
    return (
        <section className={"card " + styles.committee} id={id}>
            <div className="card-header" id={headerId}>
                <button
                    className={
                        "btn btn-link btn-block text-left d-flex justify-content-between align-items-center " +
                        styles["accordion-button"]
                    }
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={"#" + collapseId}
                    aria-controls={collapseId}
                >
                    <h3 className="mb-0">{name}</h3>
                    <Chevron />
                </button>
            </div>
            <div
                id={collapseId}
                className="collapse"
                aria-labelledby={headerId}
                ref={collapseRef}
            >
                <div className="card-body">{children}</div>
            </div>
        </section>
    );
};

const Chevron = () => {
    // https://icons.getbootstrap.com/icons/chevron-up/
    return (
        <div className={"text-dark " + styles.chevron}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-chevron-up"
                viewBox="0 0 16 16"
            >
                <path
                    fillRule="evenodd"
                    d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"
                />
            </svg>
        </div>
    );
};

const InternationalCommittee = () => {
    return (
        //
        <Committee name="International Committee">
            <p>
                The International Committee (Swedish: Internationella Nämnden,
                IN) is the committee in META that welcomes international
                students, hosts events for them, and helps them participate in
                the Computer Science and Media Technology chapters. The
                committee also provides a platform for Swedish students to get
                to know new people and be a part of chapter life. The committee
                is open to any META student, whether from CS or Media,
                international or Swedish. We often have collaborations with
                other committees.
            </p>
            <p>
                Our usual meeting time is 12:15 on Mondays. You can talk to us
                on our <a href="https://dsekt.se/whatsapp">WhatsApp group</a> to
                get more info and talk to international students.
                <br />
                Oh, also, we are the ones maintaining this website ;).
            </p>
        </Committee>
    );
};

function QultureCommittee() {
    return (
        <Committee name="Qulture Committee">
            <p>
                The Qulture Committee (Swedish: Qulturnämnden, QN) is the
                committee focusing on <i>qulture</i> events (yes, with a q!).
                Come past 17:17 in META every Tuesday to play board games at
                what is called QN Tuesday, or enjoy LANs, screenings, food
                courses, theater visits, game nights and much more when
                announced.
            </p>
            <p>
                It is known QN's meetings are hosted with plenty of cookies, so
                join the dark side of qulture!
            </p>
            Contact:
            <ul>
                <li>Email (CS): qulturattache@datasektionen.se</li>
                <li>Email (Media): qulturnamnden@medieteknik.com</li>
            </ul>
        </Committee>
    );
}

function METAdorerna() {
    return (
        <Committee name="METAdorerna">
            <p>
                METAdorerna (META doors) is the CS-Media committee that takes
                care of the Chapter Hall, META, which by now you should know is
                located at Osquars backe 21, 114 28 Stockholm, Sweden (or use
                this convenient{" "}
                <a href="https://dsekt.se/meta">Google Maps link</a>). To help
                clean META, the committee asks for help on Mondays, and
                participating at least twice lets you attend a special party at
                the end of the year for free ;).
            </p>
            Contact:
            <ul>
                <li>Email: metadorerna@datasektionen.se</li>
                <li>
                    The{" "}
                    <a href="https://datasektionen.se/namnder/forvaltningsorganet/metadorerna?lang=en">
                        METAdorerna page
                    </a>{" "}
                    on the CS chapter's website, with lots of info.
                </li>
            </ul>
        </Committee>
    );
}

function EqualityCommittee() {
    return (
        <Committee name="Equality Committee">
            <p>
                The Equality Committee (Swedish: Jämlikhetsnämnden) is the
                committee that makes sure you feel safe and welcome in the
                chapter! They have a{" "}
                <a href="https://discord.gg/UjpGaB6Ckh">Discord server</a> if
                you are interested to work on equality issues. The server is
                where any information, including meeting information, is posted.
            </p>
        </Committee>
    );
}

function MetaSpexet() {
    return (
        <Committee name="METASpexet">
            <p>
                MetaWhatagain? MetaSpexet! This committee is in charge of
                theatrical productions (spex) and is a joint committee between
                the CS and Media chapters. There are many groups inside
                MetaSpexet (theatrical production is vast).
            </p>
            <p>
                You might be interested to join them, or just to go watch their
                productions ;). Recruitement is every autumn.
            </p>
            Contact:
            <ul>
                <li>
                    {" "}
                    <a href="https://metaspexet.se">Website link</a> (only in
                    Swedish)
                </li>
                <li>
                    {" "}
                    <a href="https://www.facebook.com/metaspexet">
                        {" "}
                        Facebook page
                    </a>
                </li>
                <li>
                    {" "}
                    <a href="https://www.instagram.com/metaspexet/">
                        {" "}
                        Instagram{" "}
                    </a>
                </li>
                <li>
                    {" "}
                    Or just go to META, you'll find the spex people easily, and
                    they can tell you more about the committee.
                </li>
            </ul>
        </Committee>
    );
}

function DKM() {
    return (
        <Committee name="DKM">
            <p>
                DKM (standing for the Swedish "Datas Klubbmästeri") is the pub
                committee on the CS chapter side (see MKM for Media). The
                committee holds a CS pub each Wednesday at 17:17. There are some
                exceptional pubs, including the famous TentaPub, usually the
                first Saturday after each exam period. DKM and MKM propose both
                alcoholic and <u>alcohol-free</u> beverages. Note that to enter
                an event by DKM, you must:
            </p>
            <ul>
                <li>Present a valid identity document</li>
                <li>
                    Show your Mecenat card with the chapter's logo (see below)
                </li>
            </ul>
            <p>
                This is required even if you won't drink alcohol, or if you want
                to go to META for something else during a pub.
            </p>
            <p>
                The Mecenat card is the proof that you are a student, and the
                logo is obtained sometime after becoming a member of THS.
            </p>
            Contact:
            <ul>
                <li>Email: dkm@datasektionen.se</li>
                <li>
                    <a href="https://www.facebook.com/datasklubbmasteri">
                        Facebook page
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/dkmkth/">Instagram</a>
                </li>
            </ul>
        </Committee>
    );
}

function MKM() {
    return (
        <Committee name="MKM">
            <p>
                MKM (standing for the Swedish "Medias Klubbmästeri") is the pub
                committee on the Media chapter side (see DKM for Data). The
                committee holds a Media pub each Thursday at 17:17. There are
                some exceptional pubs, including the famous TentaPub, usually
                the first Saturday after each exam period. MKM and DKM serve
                both alcoholic and <u>alcohol-free</u> beverages. Note that to
                enter an event by MKM, you must:
            </p>
            <ul>
                <li>Present a valid identity document</li>
                <li>
                    Show your Mecenat card with the chapter's logo (see below)
                </li>
            </ul>
            <p>
                This is required even if you won't drink alcohol, or if you want
                to go to META for something else during a pub.
            </p>
            <p>
                The Mecenat card is the proof that you are a student, and the
                logo is obtained sometime after becoming a member of THS.
            </p>
            Contact:
            <ul>
                <li>Email: kbm@medieteknik.com</li>
            </ul>
        </Committee>
    );
}

function TagMonkeys() {
    return (
        <Committee name="TagMonkeys">
            <p>
                Tag Monkeys is the art and creativity committee of the CS
                chapter. Some events by TagMonkeys include photography walks,
                pumpkin carving, perler beading, etc. Some of their work can be
                seen displayed in META, the chapter hall.
            </p>
            <p>
                You can see what they do and check some events on their
                <a href="https://www.facebook.com/pages/Tag-Monkeys/120626214692945?fref=ts">
                    {" "}
                    Facebook page
                </a>
                . Otherwise, you can contact them on META's Slack.
            </p>
        </Committee>
    );
}

function Ada() {
    return (
        <Committee name="Ada">
            <p>
                Ada (in honour of{" "}
                <a href="https://en.wikipedia.org/wiki/Ada_Lovelace">
                    Ada Lovelace
                </a>
                ) is the committee dedicated to women and non-binary persons in
                the chapter. Part of their goal is to establish spaces for the
                aforementioned persons, so that they can meet each other. Their
                events are primarily for women and non-binary persons, inlcuding
                gasques, pubs, etc.
            </p>
            Contact:
            <ul>
                <li>Email (head of committee): ada-ordf@datasektionen.se</li>
                <li>
                    <a href="https://www.facebook.com/ADAKTH">Facebook page</a>
                </li>
            </ul>
        </Committee>
    );
}

function Datasladden() {
    return (
        <Committee name="Datasladden">
            <p>
                Did you know the CS chapters has cars? Yes, not one, but 2! The
                historical car, CERISE (we named all chapter's cars after the
                chapter's colour), and the newer, electric car Lusen.
                Datasladden is the committee that takes care of both vehicles
                and their respective log books. The cars are often used by
                committees (e.g. to buy ingredients for gasques), and can be
                lent for free to committees and chapter members, by contacting
                Mullerina Schmeck (a.k.a. Mulle) at mulle@datasektionen.se and
                by booking the car on the
                <a href="https://bokning.datasektionen.se/">
                    {" "}
                    chapter's booking website
                </a>{" "}
                (only in Swedish).
            </p>
            <p>
                There are guides about how to use the cars, but they are only in
                Swedish. Ask details to the mail address above. You can also
                book car drivers if you can't drive yourself ;).
            </p>
        </Committee>
    );
}

function DEMON() {
    return (
        <Committee name="DEMON (Data Et Medias OrquesterNämnd)">
            <p>
                Interested in music? DEMON (Swedish for "CS and Media's
                orchestra club") is the joint committee for music. They do not
                have a fixed rehearsal place, but can often be found at
                Hötorget. There instruments can be freely borrowed, including a
                few guitars, a digital drum set and a digital piano. The head of
                committee is the ÄrkeDEMON.
            </p>
            <p>To get in the committee, ask ÄrkeDEMON at the address below.</p>
            Contact:
            <ul>
                <li>Email: arkedemon@datasektionen.se</li>
            </ul>
        </Committee>
    );
}

function DESC() {
    return (
        <Committee name="DESC (Datas E-Sports Commmunity)">
            <p>
                DESC (standing for "Datasektionens E-Sports Community") is the
                committee to look for if you are into gaming. They organize
                tournaments in META, gaming nights, speed runs, e-sport events
                watching sessions, etc. One of their goals is to get chapter
                members to play together.
            </p>
            <p>
                There is no "specific" membership, you are part of DESC as long
                as you are part of the chapter.
            </p>
            Contacts:
            <ul>
                <li>
                    Email: desctop@datasektionen.se (DESCtop is the formal title
                    for their committee leader)
                </li>
                <li>
                    <a href="https://discord.gg/xwjCxXkmFM">Discord server</a>
                </li>
                <li>
                    <a href="https://www.facebook.com/groups/447431545372957">
                        Facebook page
                    </a>
                </li>
            </ul>
        </Committee>
    );
}

// Required capital D so React can tell it is a React component
function DJulkalendern() {
    return (
        <Committee name="dJulkalendern">
            <p>
                Mom, can we have an advent calender committee <s>at home</s> in
                META? No, we already have dJulkalendern in META.
            </p>
            <p>
                dJulkandern proposes a challenge each Sunday of December before
                Christmas Eve! Release time is 12:15 Swedish time on{" "}
                <a href="https://djulkalendern.se/">their website</a>. Everyone
                will try to clear them as fast as possible ;).
            </p>
            Contacts:
            <ul>
                <li>Email: djul@datasektionen.se</li>
                <li>
                    <a href="https://dsekt.se/djul">Dicord server</a>
                </li>
            </ul>
        </Committee>
    );
}

function DAre() {
    return (
        <Committee name="dÅre">
            <p>
                Want to go skiing? dÅre is the committee that organizes the
                yearly trip to the ski village Åre. You can contact them at
                dare@datasektionen.se.
            </p>
        </Committee>
    );
}

function ElectionCommittee() {
    return (
        <Committee name="Election Committee">
            <p>
                An election committee? What do they do, organize elections?
                Exactly! Composed of 6 committee members and the Chairperson,
                the Election Comittee (Swedish: Valberedningen) manages
                elections inside the chapter, and also organize the Chapter Fair
                once per year.
            </p>
            Elections oversimplified:
            <ol>
                <li>The Election Committee opens nominations for posts</li>
                <li>Nominated persons accept or decline</li>
                <li>Those who accepted pass an interview</li>
                <li>
                    The committee makes a review, stating whether the candidates
                    are suitable for the post or not
                </li>
                <li>
                    The Chapter Meeting, taking the committee's review into
                    account, makes a choice between the candidates
                </li>
            </ol>
            <p>
                The Chapter Fair (Swedish: Sektionsmässan) is a semester-based
                event where committees and projects, along with chapter
                officials, present their activities to the chapter members.
            </p>
            Contact:
            <ul>
                <li>
                    Email (head of committee):
                    valberedning-ordf@datasektionen.se
                </li>
                <li>Email (entire committee): valberedare@datasektionen.se</li>
            </ul>
        </Committee>
    );
}

function GUDAR() {
    return (
        <Committee name="GUDAR">
            <p>
                The CS chapter is quite old, having been founded in October
                1983, so it has a long history. GUDAR is a committee founded in
                Spring 2024 to safekeep and rediscover said history. You can
                contact the chapter's historian (mail below) if you want to know
                more about the chapter's history, or if you would like to join
                GUDAR.
            </p>
            Contact:
            <ul>
                <li>Chapter's historian: historiker@datasektionen.se</li>
                <li>General email: gudar@datasektionen.se</li>
            </ul>
        </Committee>
    );
}

function ProjectPride() {
    return (
        <Committee name="Project Pride">
            <p>
                The CS chapter participates in the yearly{" "}
                <a href="https://www.stockholmpride.org/en/">Stockholm Pride</a>{" "}
                that occurs in late July to early August. Project Pride is the
                committee that organizes this. You will learn more by
                announcements on the chapter's Discord server.
            </p>
            Contact:
            <ul>
                <li>Email: pride@datasektionen.se</li>
            </ul>
        </Committee>
    );
}

function Prylis() {
    return (
        <Committee name="Prylmångleriet">
            <p>
                Prylmångleriet (a.k.a. Prylis) is an important committee inside
                the chapter, as they are the one who sell patches and
                overalls/boilersuits (Swedish: Ovve) as well as being in charge
                of designing new patches. If that wasn't enough they also design
                the chapter's song book!
            </p>
            <p>
                Do you want to buy an Ovve or patches? The usual sale is every
                Wednesday from 12:15 to 13:00, just outside META. Updates for
                the sales can be found on the chapter's Discord server, and on
                the committee's Facebook page (link below). If you want to check
                if Pyrils as your size, contact them at the mail address below.
            </p>
            <p>
                Note that there are lots of traditions with the Ovve that you
                can learn about in the website, e.g. they are only washed once a
                year in a special event!
            </p>
            Contact:
            <ul>
                <li>Email: prylis@datasektionen.se</li>
                <li>
                    <a href="https://forms.gle/gaT6EWE5QfaRqNGK9">
                        Recruitement form
                    </a>
                </li>
                <li>
                    <a href="https://www.facebook.com/dataprylis">
                        Facebook page
                    </a>
                </li>
            </ul>
        </Committee>
    );
}

function EditorialBoard() {
    return (
        <Committee name="Editorial Board">
            <p>
                The CS chapter has its own newspaper, dbuggen! dbuggen is
                released once per period, and is available{" "}
                <a href="https://dbu.gg/">online</a> (only in Swedish). The
                Editorial Board committee (Swedish: Redaqtionen) is in charge of
                editing dbuggen.
            </p>
            Contact:
            <ul>
                <li>Email: chefred@dbu.gg</li>
            </ul>
        </Committee>
    );
}

function Scala() {
    return (
        <Committee name="Scala">
            <p>
                The chapter has it's own choir, Scala. It is very open, so much
                actually that people outside the chapter can be part of it!
            </p>
            Contact:
            <ul>
                <li>Email: kormastare@datasektionen.se</li>
            </ul>
        </Committee>
    );
}

function STUDS() {
    return (
        <Committee name="Study Visit (STUDS)">
            <p>
                STUDS is a bit of a peculiar committee in the chapter, as it is
                an annual, nonprofit project and a course (AI2151) from KTH. Its
                goal is to open newtorks with IT companies for students. STUDS
                consists of 30 selected students each year, which will work in
                different work groups that work together to organize events with
                companies. Some of their groups are IT group, travel group,
                event group, economy group, etc.
            </p>
            <p>
                As written above, STUDS is a course, worth 15 credits
                (equivalent to a full period, or half a semester). The course
                ends with a study trip abroad. Note the course can only be
                joined by <u>Master students</u> at EECS, and may not be taken
                by exchange students (you need to be here for more than 6
                months)! Media students may also apply for the course, with
                their master coordinator's approval.
            </p>
            <p>
                Announcements with the application form take place in August to
                early September, and can be found on the chapter's Discord
                server, STUDS' website, their Facebook page and on the TVs in
                META.
            </p>
            Contact:
            <ul>
                <li>
                    <a href="https://studieresan.se">Website</a> (fully
                    available in English)
                </li>
                <li>Email: ansvarig@studs.se</li>
                <li>
                    <a href="https://www.kth.se/student/kurser/kurs/AI2151">
                        Course description (KTH website)
                    </a>
                </li>
                <li>
                    <a href="https://www.facebook.com/StudsKTH">
                        Facebook page
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/studskth">Instagram</a>
                </li>
            </ul>
        </Committee>
    );
}

function StudyBoard() {
    return (
        <Committee name="Study Board">
            <p>
                At KTH every students has the possibility to ask for improvement
                in the education you receive. Each Chapter has a Study Board
                (Swedish: Studienämnden) in charge of improving the studying
                environment and the quality of your courses. You can contact the
                committee, which will in turn give feedback to teachers and
                officials in the Chapter. They will also answer your questions
                on education, or redirect you to someone who will.
            </p>
            Contact:
            <ul>
                <li>Bachelor representatives (per year):</li>
                <ul>
                    <li>First year: ake-1@datasektionen.se</li>
                    <li>Second year: ake-2@datasektionen.se</li>
                    <li>Third year: ake-3@datasektionen.se</li>
                </ul>
                <li>Master representatives:</li>
                <ul>
                    <li>
                        Computer Science (TCSCM): master-tcs@datasektionen.se
                    </li>
                    <li>Cyber Security (TCYSM): master-cys@datasektionen.se</li>
                    <li>
                        Machine Learning (TMAIM): master-ml@datasektionen.se
                    </li>
                </ul>
                <li>
                    Student Safety Representative (SSO): sso@datasektionen.se
                    (e.g. for cold rooms or uncomfortable chairs)
                </li>
                <li>Study Board President (SNO): sno@datasektionen.se</li>
                <li>
                    Program Responsible Student (PAS): pas@datasektionen.se (for
                    long-term improvements of programs)
                </li>
                <li>
                    Chapter Board Representative for Education (DUF):
                    d-uf@datasektionen.se (link between the committee and the
                    Chapter Board)
                </li>
                <li>
                    The{" "}
                    <a href="https://datasektionen.se/namnder/paverkansorganet/studienamnden?lang=en">
                        chapter's website
                    </a>{" "}
                    has a much longer presentation of the committee
                </li>
            </ul>
        </Committee>
    );
}

function BakingCommittee() {
    return (
        <Committee name="Baking Committee">
            <p>
                Do you like to cook and bake? Then the Cooking Committee is the
                place for you! They also call themselves the chatper's
                "sweetest" group for a reason, prepare yourself to learn how to
                bake the best fika in KTH ;). Most of the time the committee
                members bake for themselves, but they also bake for the
                chapter's meetings, with themes for specific meetings. They
                often collaborate with other committees, so you may enjoy their
                delicacies this way too.
            </p>
            Contact:
            <ul>
                <li>Email: bakis@datasektionen.se</li>
                <li>
                    <a href="https://dsekt.se/baka">Joining form</a>
                </li>
            </ul>
        </Committee>
    );
}

function NLG() {
    return (
        <Committee name="Business Relations Group">
            <p>
                The Chapter has connections with many companies in the industry,
                and it is the Business Relations Group (Swedish:
                Näringslivsgruppen, NLG) that manages these relationships. They
                commonly organize lunch lectures from 12:12 to 13:00, where
                companies present themselves and jobs, projects and trainee
                programs that may interest you. The committee posts ads from
                companies on the chapter's Discord, and also arranges company
                pubs, like a usual pub on Wednseday, but where you can mingle
                with companies.
            </p>
            Contact:
            <ul>
                <li>Email: foretag@datasektionen.se</li>
                <li>
                    <a href="https://www.facebook.com/naringslivsgruppendatasektionenkth">
                        Facebook page
                    </a>{" "}
                    (in Swedish only)
                </li>
                <li>
                    <a href="https://www.instagram.com/nlg_data/">Instagram</a>{" "}
                    (in Swedish only)
                </li>
                <li>
                    <a href="https://www.linkedin.com/company/n%C3%A4ringslivsgruppen-datasektionen/">
                        LinkedIn
                    </a>
                </li>
            </ul>
        </Committee>
    );
}

function IOR() {
    return (
        <Committee name="Information Organ">
            <p>
                The Information Organ (Swedish: Informationsorganet, IOR) is a
                very important committee inside the chapter, as it is
                responsible for developing and maintaining the chapter's
                systems, including the{" "}
                <a href="https://github.com/datasektionen/">GitHub</a> that
                hosts this website code. One of the most important systems is{" "}
                <a href="https://cashflow.datasektionen.se/">CashFlow</a> where
                you can ask to be reimbursed for expenses done for the chapter!
                IOR organizes programming evenings where they develop the
                chapter's systems. Anyone is welcome, regardless of skill in the
                language/infrastructure used! Meetings usually happen at 17:00
                in the E bulding (with large amounts of free fika). You can find
                announcements on their Mattermost (see below).
            </p>
            Contact:
            <ul>
                <li>Email: ior@datasektionen.se</li>
                <li>Head of IT's mail: d-sys@datasektionen.se</li>
                <li>
                    <a href="https://dsekt.se/iormost">Mattermost</a>
                </li>
            </ul>
        </Committee>
    );
}

function SportsCommittee() {
    return (
        <Committee name="Sports Committee">
            <p>
                Bored by computer science stuff and want to exercise? The Sports
                Committee (Swedish: Idrottsnämnden) has you covered! From
                dodgeball to basketball and from badminton to football, the
                committee organizes sports sessions every Saturday; the exact
                sport depends on what the members want to do. They propose both
                indoor and outdoor activities, where you can meet other students
                from the chapter, and get info on KTH-wide sport events. They
                mostly interact on Facebook (link below) but they also make
                announcements on the chapter's Discord server.
            </p>
            Contact:
            <ul>
                <li>Email: idrott@datasektionen.se</li>
                <li>
                    <a href="https://www.facebook.com/groups/datafotboll/">
                        Facebook
                    </a>
                </li>
            </ul>
        </Committee>
    );
}

function Styrelsen() {
    return (
        <Committee name="Chapter Board">
            <p>
                The chapter board (Swedish: Styrelsen) is the organ of the Media
                Technology chapter that oversees the chapter's activities. All
                committees' chairperson report to the board, which in turn
                discuss and makes decisions at the highest level in the chapter.
                Joining the board is an opportunity to influence the chapter.
                The board is also responsible for business issues and study
                monitoring.
            </p>
            Contact:
            <ul>
                <li>Email: styrelsen@medieteknik.com</li>
            </ul>
        </Committee>
    );
}

function MediaElectionCommittee() {
    return (
        <Committee name="Election Committee">
            <p>
                The Election Committee (Swedish: Valberedningen) prepares and
                manages the elections for certain positions in the Media
                chatper. The committee receives nominations and candidacies,
                asses candidates with an interview, and make a review of the
                candidates for the next chapter meeting. The Election Committee
                works to keep elections democratic and ensure all candidates
                have an equal treatment and process.
            </p>
            Contact:
            <ul>
                <li>Email (head of committee): valordf@medieteknik.com</li>
                <li>Email (rest of the committee): val@medieteknik.com</li>
            </ul>
        </Committee>
    );
}

function MediaStudyBoard() {
    return (
        <Committee name="Study Board">
            <p>
                The Study Board (Swedish: Studienämnden) verifies that every
                student has a well-functioning education and safe study
                environment. This applies at both programme-level and
                course-level. If you have any problem with courses and programs,
                or have questions about them, you can contact the Study Board!
                Joining the committee lets you help everyone have a better
                education and you will have a better understanding of education
                at KTH.
            </p>
            Contact:
            <ul>
                <li>Email: sno@medieteknik.com</li>
            </ul>
        </Committee>
    );
}

function KomN() {
    return (
        <Committee name="Communication Commmittee">
            <p>
                The Communication Committee (Swedish: Kommunikationsnämnden) is
                the committee in charge of Media's external branding, e.g. they
                update Media's Instagram, Facebook, etc. They also propose fun,
                short cohesion events for the chapter and run a podcast on
                Spotify! In addition to this, they propose an advent calender
                made of 24 short videos every Christmas.
            </p>
            Contact:
            <ul>
                <li>Email: kommunikator@medieteknik.com</li>
            </ul>
        </Committee>
    );
}

function MBD() {
    return (
        <Committee name="Career Fair">
            <p>
                Searching for a job after KTH? Media's career fair (Swedish:
                Medias Branschdag) is a large event that lets you find jobs,
                seek degree project opportunities or simply enrich your network,
                it's up to you! Don't miss it!
            </p>
            Contact:
            <ul>
                <li>Email: branschdag@medieteknik.com</li>
            </ul>
        </Committee>
    );
}

function MediaNLG() {
    return (
        <Committee name="Business Group">
            <p>
                The Business Relations Group (Swedish: Näringslivsgruppen)
                initiate contacts with companies and provide students with
                opportunities to build a strong network of business contacts.
                Working for the Business Group makes it doubly as effective for
                you. Members organise events such as mingles, guest lectures and
                recruitement events.
            </p>
            Contact:
            <ul>
                <li>Email: nlg@medieteknik.com</li>
            </ul>
        </Committee>
    );
}

function Festmästeriet() {
    return (
        <Committee name="Party Committee">
            <p>
                Party people, here is your stuff! The Party Committee (Swedish:
                Festmästeriet) is specialized in organizing and hosting gasques;
                traditional swedish student parties featuring a three course
                meal, fun activities and an afterparty open for everyone.
                Members of the committee can engage in various tasks, such as
                deciding the menu, doing PR (i.e. marketing), inventing fun
                competitions, or decorating the venue. Join them to maximise the
                fun of Media's parties.
            </p>
            Contact:
            <ul>
                <li>Email: festmasteriet@medieteknik.com</li>
                <li>
                    <a href="https://www.instagram.com/festmasteriet_medieteknik/">
                        Instagram
                    </a>
                </li>
            </ul>
        </Committee>
    );
}

function FilmCommittee() {
    return (
        <Committee name="Film Committee">
            <p>
                Interested in films? The Film Committee (Swedish: Filmnämden)
                produces a high-effort film project for each reception. They
                handle every part of film-making, from screen-writing, to
                filming, post-production, etc. You can see their work on their
                social networks below.
            </p>
            Contact:
            <ul>
                <li>Email: filmnamnden@medieteknik.com</li>
                <li>Instagram: @filmnamnden</li>
                <li>
                    <a href="https://youtube.com/@filmnamndenmedieteknik?si=MhexLexOo8W1N8eO">
                        Youtube
                    </a>
                </li>
            </ul>
        </Committee>
    );
}

function PhotoGroup() {
    return (
        <Committee name="Photo Group">
            <p>
                Do you have an interest in photography? The Photo Group
                (Swedish: Fotogruppen) is a meeting place for all photography
                people of the Media chapter. You do not need to have technical
                knowledge of cameras, you can join even if you are only
                interested in looking at others' pictures. Some members in the
                committee have extensive technical knowledge, some are more on
                the art aspect, so there is much you can learn from them!
                <br />
            </p>
            Contact:
            <ul>
                <li>Email: fotogruppen@medieteknik.com</li>
            </ul>
        </Committee>
    );
}

function MediaSportsCommittee() {
    return (
        <Committee name="Sports Committee">
            <p>
                Come combine your studies with fresh air, exercising and meeting
                new friends. The Sports Committee (Swedish: Idrottsnämnden)
                organizes sport activities for all Media students to enjoy.
                <br />
            </p>
            Contact:
            <ul>
                <li>Email: idrottsnamnden@medieteknik.com</li>
            </ul>
        </Committee>
    );
}

function Matlaget() {
    return (
        <Committee name="Food Team">
            <p>
                Prepare your apron and best cooking ustensils, it's time to
                cook. The Food Team (Swedish: Matlaget) prepares the food for
                Media's chapter meetings, from planning what to cook, to buying
                the ingredients and finally cooking. The committee is open, i.e.
                anyone in the Media chapter can join the Food Team and cook as
                much (or as little) as they want. It's also a great oppportunity
                to learn cooking, or just to have fun!
            </p>
            Contact:
            <ul>
                <li>Email: masterkock@medieteknik.com</li>
            </ul>
        </Committee>
    );
}

function MediaMärkt() {
    return (
        <Committee name="Media Label">
            <p>
                Does your tail-coat (Swedish: B-Frak) feel empty? Media Label
                (Swedish: Media Märkt) designs and sells patches so that no spot
                on your tail-coat feels like it's missing something. You can
                also talk to them if you have questions about overalls.
            </p>
            Contact:
            <ul>
                <li>Email: mediamarkering@medieteknik.com</li>
            </ul>
        </Committee>
    );
}

function Sånglederiet() {
    return (
        <Committee name="Song Team">
            <p>
                The Song Team (Swedish: Sånglederiet) brings together song
                lovers to raise their voice in harmony on great songs. They
                don't stop at singing as they also juggle, and sometimes
                organize singing gasques.
            </p>
            Contact:
            <ul>
                <li>Email: sanglederiet@medieteknik.com</li>
                <li>
                    Email (head of committee): ofversangledare@medieteknik.com
                </li>
            </ul>
        </Committee>
    );
}

export default Committees;
