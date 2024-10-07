const Committees = () => {
    return (
        <div className="committees">
            Committees (Swedish: nämnder) are groups inside the chapter that dedicate themselves to some part of chapter life, such as
            student overall culture, sports, chapter management, parties, etc. They are most important and as such we describe the committees of
            the Computer Science (CS) and Media Technology here.
            Some committees are shared between the computer Science and Media Technology chapters and are listed below. Others are
            chapter-specific, so CS's Study Board is not the same committee as Media's Study Board.
            <ChapterBelonging belonging="CS-Media committees"/>
            <div className="committee-info">
                <CommitteeName name="International Committee" />
                <InternationalCommittee />

                <CommitteeName name={"DEMON (Data Et Medias OrquesterNämnd)"}/>
                <DEMON/>

                <CommitteeName name="Qulture Committee"/>
                <QultureCommittee/>

                <CommitteeName name="METAdorerna"/>
                <METAdorerna/>

                <CommitteeName name="MetaSpexet"/>
                <MetaSpexet/>
            </div>

            <ChapterBelonging belonging="CS committees"/>
            <div className="committee-info">
                <CommitteeName name={"Equality Committee"}/>
                <EqualityCommittee/>

                <CommitteeName name={"DKM"}/>
                <DKM/>

                <CommitteeName name={"TagMonkeys"}/>
                <TagMonkeys/>

                <CommitteeName name={"Ada"}/>
                <Ada/>

                <CommitteeName name={"Datasladden"}/>
                <Datasladden/>

                <CommitteeName name={"DESC (Datas E-Sports Commmunity)"}/>
                <DESC/>

                <CommitteeName name={"dJulkalendern"}/>
                <DJulkalendern/>

                <CommitteeName name={"dÅre"}/>
                <DAre/>

                <CommitteeName name={"Election Committee"}/>
                <ElectionCommittee/>

                <CommitteeName name={"GUDAR"}/>
                <GUDAR/>

                <CommitteeName name={"Project Pride"}/>
                <ProjectPride/>

                <CommitteeName name={"Prylmångleriet"}/>
                <Prylis/>

                <CommitteeName name={"Editorial Board"}/>
                <EditorialBoard/>

                <CommitteeName name={"Scala"}/>
                <Scala/>

                <CommitteeName name={"Study Visit (STUDS)"}/>
                <STUDS/>

                <CommitteeName name={"Study Board"}/>
                <StudyBoard/>

                <CommitteeName name={"Baking Committee"}/>
                <BakingCommittee/>

                <CommitteeName name={"Business Relations Group"}/>
                <NLG/>

                <CommitteeName name={"Information Organ"}/>
                <IOR/>

                <CommitteeName name={"Sports Committee"}/>
                <SportsCommittee/>
            </div>

            <ChapterBelonging belonging="Media committees"/>
            <div className="committee-info">
                <CommitteeName name={"Chapter board"}/>
                <Styrelsen/>

                <CommitteeName name={"Election Committee"}/>
                <MediaElectionCommittee/>

                <CommitteeName name={"Study Board"}/>
                <MediaStudyBoard/>

                <CommitteeName name={"Communication Commmittee"}/>
                <KomN/>

                <CommitteeName name={"Carrier Fair"}/>
                <MBD/>

                <CommitteeName name={"Business Group"}/>
                <MediaNLG/>

                <CommitteeName name={"Party Committee"}/>
                <Festmästeriet/>

                <CommitteeName name={"Film Committee"}/>
                <FilmCommittee/>

                <CommitteeName name={"Photo Group"}/>
                <PhotoGroup/>

                <CommitteeName name={"Sports Committee"}/>
                <MediaSportsCommittee/>

                <CommitteeName name={"Food Team"}/>
                <Matlaget/>

                <CommitteeName name={"Media Label"}/>
                <MediaMärkt/>

                <CommitteeName name={"MKM"}/>
                <MKM/>

                <CommitteeName name={"Song Team"}/>
                <Sånglederiet/>
            </div>
        </div>
    );
}

function ChapterBelonging({belonging}) {
    return(
        <h2>{belonging}</h2>
    );
}

function CommitteeName({name}) {
    return(
        <h3>{name}</h3>
    );
}

const InternationalCommittee = () => {
    return(
        //
        <p>
            The International Committee (Swedish: Internationella Nämnden, IN) is the committee in META that 
            welcomes international students, make events for them, and helps them participate in Computer
            Science and Media Technology chapters. The committee also provides a platform for Swedish students.
            The committee is open to any META student, whether from CS or Media, international or Swedish.
            We often have collaborations with other committees.
            <br/>
            Our usual meeting time is 12:15 on Mondays. You can talk to us on
            our <a href="https://dsekt.se/whatsapp">WhatsApp group</a> to get more info and talk to international
            students.
            <br/>
            Oh, also, we are the ones maintaining this website ;).
        </p>
    )
}

function QultureCommittee() {
    return(
        <p>
            The Qulture Committee (Swedish: Qulturnämnden, QN) is the committee focusing on <i>qulture</i> events (yes,
            with a q!). Come past 17:17 in META every Tuesday to play board games at what is called QN Tuesday, or enjoy LANs, 
            screenings, food courses, theater visits, game nights and much more when announced.
            <br/>
            It is known QN's meetings are hosted with plenty of cookies, so join the dark side of qulture!
            <br/>
            Contact:
            <ul>
                <li>Email (CS): qulturattache@datasektionen.se</li>
                <li>Email (Media): qulturnamnden@medieteknik.com</li>
            </ul>
        </p>
    );
}


function METAdorerna() {
    return(
        <p>
            METAdorerna (META doors) is the CS-Media committee that takes care of the Chapter Hall, META. If you do
            not know yet, it is located at Osquars backe 21, 114 28 Stockholm, Sweden (or use this convenient{' '}
            <a href="https://www.google.se/maps/place/META/@59.347854,18.0713357,19.33z/data=!4m6!3m5!1s0x465f9d8239dc3dc7:0x5339bd50f81e85b2!8m2!3d59.3480716!4d18.0713859!16s%2Fg%2F11tjpzdy84?entry=ttu">
                Google Maps link
            </a>). To help clean META, the committee asks for help on Mondays, and participating at least twice 
            lets you can attend a special party at the end of the year ;).
            <br/>
            Contact:
            <ul>
                <li>Email: metadorerna@datasektionen.se</li>
                <li>The <a href="https://datasektionen.se/namnder/metadorerna?lang=en">METAdorerna page</a> on the CS chapter's
                website, with lots of info.</li>
            </ul>
        </p>
        
    );
}

function EqualityCommittee() {
    return (
        <p>
            The Equality Committee (Swedish: Jämlikhetsnämnden) is the committee that makes sure you feel safe and welcome
            in the chapter! They have a <a href="https://discord.gg/UjpGaB6Ckh">Discord server</a> if you are interested
            to work on equality issues. The server is where any information, including meeting information, is posted.
        </p>
    )
}

function MetaSpexet() {
    return (
        <p>
            MetaWhatagain? MetaSpexet! This committee is in charge of theatrical productions (spex) and is a joint committee
            between the CS and Media chapters. There are many groups inside MetaSpexet (theatrical production is vast).
            <br/>
            You might be interested to join them, or just to go watch their productions ;). Recruitement is every autumn.
            <br/>
            Contact:
            <ul>
                <li> <a href="https://metaspexet.se">Website link</a> (only in Swedish)</li>
                <li> <a href="https://www.facebook.com/metaspexet"> Facebook page</a></li>
                <li> <a href= "https://www.instagram.com/metaspexet/"> Instagram </a></li>
                <li> Or just go to META, you'll find the spex people easily, and they can tell you more about the 
                    committee.
                </li>
            </ul>
        </p>
    )
}

function DKM() {
    return (
        <p>
            DKM (standing for the Swedish "Datas Klubbmästeri") is the pub committee on the CS chapter side (see MKM for Media).
            The committee holds a CS pub each Wednesday at 17:17. There are some exceptional pubs, including the famous 
            TentaPub, usually the first Saturday after each exam period. DKM and MKM propose both alcoholic 
            and <u>alcohol-free</u> beverages. Note that to enter an event by DKM, you must:
            <ul>
                <li>Present a valid identity document</li>
                <li>Show your Mecenat card with the chapter's logo (see below)</li>
            </ul>
            This is required even if you won't drink alcohol, or if you want to go to META for something else during a pub.
            <br/>
            The Mecenat card is the proof that you are a student, and the logo is obtained sometime after becoming a 
            member of THS.
            <br/>
            Contact:
            <ul>
                <li>Email: dkm@datasektionen.se</li>
                <li><a href="https://www.facebook.com/datasklubbmasteri">Facebook page</a></li>
                <li><a href="https://www.instagram.com/dkmkth/">Instagram</a></li>
            </ul>
        </p>
    )
}

function MKM() {
    return (
        <p>
            MKM (standing for the Swedish "Medias Klubbmästeri") is the pub committee on the Media chapter side
            (see DKM for Media). The committee holds a Media pub each Thursday at 17:17. There are some 
            exceptional pubs, including the famous TentaPub, usually the first Saturday after each exam period. 
            MKM and DKM serve both alcoholic and <u>alcohol-free</u> beverages. Note that to enter an event by 
            MKM, you must:
            <ul>
                <li>Present a valid identity document</li>
                <li>Show your Mecenat card with the chapter's logo (see below)</li>
            </ul>
            This is required even if you won't drink alcohol, or if you want to go to META for something else during a pub.
            <br/>
            The Mecenat card is the proof that you are a student, and the logo is obtained sometime after becoming a 
            member of THS.
        </p>
    )
}


function TagMonkeys() {
    return (
        <p>
            Tag Monkeys is the art and creativity committee of the CS chapter. Some events by TagMonkeys 
            include photography walks, pumpkin carving, perler beading, etc. Some of their work can be seen 
            displayed in META, the chapter hall.
            <br/>
            You can see what they do and check some events on their 
            <a href="https://www.facebook.com/pages/Tag-Monkeys/120626214692945?fref=ts"> Facebook page</a>. 
            Otherwise, you can contact them on META's Slack.
        </p>
    )
}

function Ada() {
    return (
        <p>
            Ada (in honour of <a href="https://en.wikipedia.org/wiki/Ada_Lovelace">Ada Lovelace</a>) is the committee 
            dedicated to women and non-binary persons in the chapter. Part of their goal is to establish spaces 
            for the aforementioned persons, so that they can meet each other. Their events are primarily for women and 
            non-binary persons, inlcuding gasques, pubs, etc.
            <br/>
            Contact:
            <ul>
                <li>Email (head of committee): ada-ordf@datasektionen.se</li>
                <li><a href="https://www.facebook.com/ADAKTH">Facebook page</a></li>
            </ul>
        </p>
    )
}

function Datasladden() {
    return (
        <p>
            Did you know the CS chapters has cars? Yes, not one, but 2! The historical car, CERISE (we named all 
            chapter's cars after the chapter's colour), and the newer, electric car Lusen. Datasladden is the committee
            that takes care of both vehicles and their respective log books. The cars are often used by committees (e.g. 
            to buy ingredients for gasques), and can be lent for free to committees and chapter members, by contacting 
            Mullerina Schmeck (a.k.a. Mulle) at mulle@datasektionen.se and by booking the car on the
            <a href="https://bokning.datasektionen.se/"> chapter's booking website</a> (only in Swedish).
            <br/>
            There are guides about how to use the cars, but they are only in Swedish. Ask details to the mail 
            address above. You can also book car drivers if you can't drive yourself ;).
        </p>
    )
}

function DEMON() {
    return (
        <p>
            Interested in music? DEMON (Swedish for "CS and Media's orchestra club") is the joined committee
            for music. They do not have a fixed repetition place, but can often be found at Hötorget. 
            There instruments can be freely borrowed, including a few guitars, a digital drum set and a digital 
            piano. The head of committee is the ÄrkeDEMON.
            <br/>
            To get in the committee, try asking people in META to get access to their Slack.
            <br/>
            Contact:
            <ul>
                <li>Email: arkedemon@datasektionen.se</li>
            </ul>
        </p>
    )
}

function DESC() {
    return (
        <p>
            DESC (Swedish for "CS e-sport community") is the committee to look for if you are into gaming. They
            organize tournaments in META, gaming nights, speed runs, e-sport events watching sessions, etc. One of 
            their goal is that chapter members play together.
            <br/>
            There is no "specific" membership, you are part of DESC as long as you are part of the chapter.
            <br/>
            Contacts:
            <ul>
                <li>Email: desctop@datasektionen.se (Desctop is their title of head of committee)</li>
                <li><a href="https://discord.gg/xwjCxXkmFM">Dicord server</a></li>
                <li><a href="https://www.facebook.com/groups/447431545372957">Facebook page</a></li>
            </ul>
        </p>
    )
}

// Required capital D so React can tell it is a React component
function DJulkalendern() {
    return (
        <p>
            Mom, can we have an advent calender committee <s>at home</s> in META? No, we already have dJulkalendern in META.
            <br/>
            dJulkandern proposes a challenge each Sunday of December before Christmas Eve! Release time is 12:15 Swedish time
            on <a href="https://djulkalendern.se/">their website</a>. Everyone will try to clear them as fast as possible ;).
            <br/>
            Contacts:
            <ul>
                <li>Email: djul@datasektionen.se</li>
                <li><a href="https://dsekt.se/djul">Dicord server</a></li>
            </ul>
        </p>
    )
}

function DAre() {
    return (
        <p>
            Want to go skiing? dÅre is the committee that organizes the yearly trip to the ski village Åre. You can contact them at
            dare@datasektionen.se.
        </p>
    )
}

function ElectionCommittee() {
    return (
        <p>
            An election committee? What do they do, organize elections? Exactly! Composed of 6 committee members and the Chairperson,
            the Election Comittee (Swedish: Valberedningen) manages elections inside the chapter, and also organize the Chapter Fair once per year.
            <br/>
            Elections oversimplified:
            <ol>
                <li>The Election Committee opens nominations for posts</li>
                <li>Nominated persons accept or decline</li>
                <li>Those who accepted pass an interview</li>
                <li>The committee makes a review, stating whether the candidates are suitable for the post or not</li>
                <li>The Chapter Meeting, taking the committee's review into account, makes a choice between the candidates</li>
            </ol>
            The Chapter Fair (Swedish: Sektionsmässan) is a semester-based event where committees and projects, along with chapter officials,
            present their activities to the chapter members.
            <br/>
            Contact:
            <ul>
                <li>Email (head of committee): valberedning-ordf@datasektionen.se</li>
                <li>Email (rest of the committee): valberedare@datasektionen.se</li>
            </ul>
        </p>
    )
}

function GUDAR() {
    return (
        <p>
            The CS chapter is quite old, having been founded in October 1983, so it has a long history. GUDAR is a committee founded in Spring 2024
            to safekeep and rediscover said history. You can contact the chapter's historian (mail below) if you want to know more about the
            chapter's history, or if you would like to join GUDAR.
            <br/>
            Contact:
            <ul>
                <li>Chapter's historian: historiker@datasektionen.se</li>
                <li>General email: gudar@datasektionen.se</li>
            </ul>
        </p>
    )
}

function ProjectPride() {
    return (
        <p>
            The CS chapter participates in the yearly <a href="https://www.stockholmpride.org/en/">Stockholm Pride</a> that occurs in late July to
            early August. Project Pride is the committee that organizes this. You will learn more by announcements on the chapter's Discord server.
            <br/>
            Contact:
            <ul>
                <li>Email: pride@datasektionen.se</li>
            </ul>
        </p>
    )
}

function Prylis() {
    return (
        <p>
            Prylmångleriet (a.k.a. Prylis) is an important committee inside the chapter, as they are the one who sell patches and
            overalls/boilersuits (Swedish: Ovve) as well as being in charge of designing new patches. If that wasn't enough they
            also design the chapter's song book!
            <br/>
            Do you want to buy an Ovve or patches? The usual sale is every Wednesday from 12:15 to 13:00, just outside META. Updates
            for the sales can be found on the chapter's Discord server, and on the committee's Facebook page (link below). If you
            want to check if Pyrils as your size, contact them at the mail address below.
            <br/>
            Note that there are lots of traditions with the Ovve that you can learn about in the website, e.g. they are only washed
            once a year in a special event!
            <br/>
            Contact:
            <ul>
                <li>Email: prylis@datasektionen.se</li>
                <li><a href="https://forms.gle/gaT6EWE5QfaRqNGK9">Joining form</a></li>
                <li><a href="https://www.facebook.com/dataprylis">Facebook page</a></li>
            </ul>
        </p>
    )
}


function EditorialBoard() {
    return (
        <p>
            The CS chapter has its own newspaper, dbuggen! dbuggen is released once per period, and is
            available <a href="https://dbu.gg/">online</a> (only in Swedish). The Editorial Board committee (Swedish: Redaqtionen)
            is in charge of editing dbuggen.
            <br/>
            Contact:
            <ul>
                <li>Email: chefred@dbu.gg</li>
            </ul>
        </p>
    )
}

function Scala() {
    return (
        <p>
            The chapter has it's own choir, Scala. It is very open, so much actually that people outside the chapter can be part of it!
            Contact:
            <br/>
            <ul>
                <li>Email: kormastare@datasektionen.se</li>
            </ul>
        </p>
    )
}

function STUDS() {
    return (
        <p>
            STUDS is a bit of a peculiar committee in the chapter, as it is an annual, nonprofit project and a course (AI2151)
            from KTH. Its goal is to open newtorks with IT companies for students. STUDS consists of 30 selected students each year,
            which will work in different work groups that work together to organize events with companies. Some of their groups
            are IT group, travel group, event group, economy group, etc.
            <br/>
            As written above, STUDS is a course, worth 15 credits (equivalent to a full period, or half a semester). The course ends
            with a study trip abroad. Note the course can only be joined by <u>Master students</u> at EECS, and may not be taken by
            exchange students (you need to be here for more than 6 months)! Media students may also apply for the course, with
            their master coordinator's approval.
            <br/>
            Announcements with the application form take place in August to early September, and can be found on the chapter's
            Discord server, STUDS' website, their Facebook page and on the TVs in META.
            <br/>
            Contact:
            <ul>
                <li><a href="https://studieresan.se">Website</a> (fully available in English)</li>
                <li>Email: ansvarig@studs.se</li>
                <li><a href="https://www.kth.se/student/kurser/kurs/AI2151">Course description (KTH website)</a></li>
                <li><a href="https://www.facebook.com/StudsKTH">Facebook page</a></li>
                <li><a href="https://www.instagram.com/studskth">Instagram</a></li>
            </ul>
        </p>
    )
}

function StudyBoard() {
    return (
        <p>
            At KTH every students has the possibility to ask for improvement in the education you receive. Each Chapter has a Study
            Board (Swedish: Studienämnden) in charge of improving the studying environment and the quality of your courses.
            You can contact the committee, which will in turn give feedback to teachers and officials in the Chapter. They will
            also answer your questions on education, or redirect you to someone who will.
            <br/>
            Contact:
            <ul>
                <li>Bachelor representatives (per year):</li>
                <ul>
                    <li>First year:     ake-1@datasektionen.se</li>
                    <li>Second year:    ake-2@datasektionen.se</li>
                    <li>Third year:     ake-3@datasektionen.se</li>
                </ul>
                <li>Master representatives:</li>
                <ul>
                    <li>Computer Science (TCSCM):   master-tcs@datasektionen.se</li>
                    <li>Cyber Security (TCYSM):     master-cys@datasektionen.se</li>
                    <li>Machine Learning (TMAIM):   master-ml@datasektionen.se</li>
                </ul>
                <li>Student Safety Representative (SSO): sso@datasektionen.se (e.g. for cold rooms or uncomfortable chairs)</li>
                <li>Study Board President (SNO): sno@datasektionen.se</li>
                <li>Program Responsible Student (PAS): pas@datasektionen.se (for long-term improvements of programs)</li>
                <li>Chapter Board Representative for Education (DUF): d-uf@datasektionen.se (link between the committee and the Chapter Board)</li>
                <li>The <a href="https://datasektionen.se/namnder/studienamnden?lang=en">chapter's website</a> has a much longer
                presentation of the committee</li>
            </ul>
        </p>
    )
}

function BakingCommittee() {
    return (
        <p>
            Do you like to cook and bake? Then the Cooking Committee is the place for you! They also call themselves the chatper's "sweetest"
            group for a reason, prepare yourself to learn how to bake the best fika in KTH ;). Most of the time the committee
            members bake for themselves, but they also bake for the chapter's meetings, with themes for specific meetings. They often
            collaborate with other committees, so you may enjoy their delicacies this way too.
            <br/>
            Contact:
            <ul>
                <li>Email: bakis@datasektionen.se</li>
                <li><a href="https://dsekt.se/baka">Joining form</a></li>
            </ul>
        </p>
    )
}

function NLG() {
    return (
        <p>
            The Chapter has connections with many companies in the industry, and it is the Business Relations Group
            (Swedish: Näringslivsgruppen, NLG) that manages these relationships. They commonly organize lunch lectures
            from 12:12 to 13:00, where companies present themselves and jobs, projects and trainee programs that may
            interest you. The committee posts ads from companies on the chapter's Discord, and also arranges company pubs,
            like a usual pub on Wednseday, but where you can mingle with companies.
            <br/>
            Contact:
            <ul>
                <li>Email: foretag@datasektionen.se</li>
                <li><a href="https://www.facebook.com/naringslivsgruppendatasektionenkth">Facebook page</a> (in Swedish only)</li>
                <li><a href="https://www.instagram.com/nlg_data/">Instagram</a> (in Swedish only)</li>
                <li><a href="https://www.linkedin.com/company/n%C3%A4ringslivsgruppen-datasektionen/">LinkedIn</a></li>
            </ul>
        </p>
    )
}

function IOR() {
    return (
        <p>
            The Information Organ (Swedish: Informationsorganet, IOR) is a very important committee inside the chapter,
            as it is responsible for developing and maintaining the chapter's systems, including
            the <a href="https://github.com/datasektionen/">GitHub</a> that hosts this website code. One of the most
            important systems is <a href="https://cashflow.datasektionen.se/">CashFlow</a> where you can ask to be refunded
            for expenses done for the chapter! IOR organizes programming evenings where they develop the chapter's system. Anyone
            is welcome, regardless of skill in the language/infrastructure used! Meetings usually happen at 19:00 in the E bulding.
            You can find announcements on their Mattermost (see below).
            <br/>
            Contact:
            <ul>
                <li>Email: ior@datasektionen.se</li>
                <li>Head of IT's mail: d-sys@datasektionen.se</li>
                <li><a href="https://mattermost.datasektionen.se/ior/channels/town-square">Mattermost</a></li>
            </ul>
        </p>
    )
}

function SportsCommittee() {
    return (
        <p>
            Bored by computer science stuff and want to exercise? The Sports Committee (Swedish: Idrottsnämnden) has you covered!
            From dodgeball to basketball and from badminton to football, the committee organizes sports sessions every Saturday;
            the exact sport depends on what the members want to do. They propose both indoor and outdoor activities, where you
            can meet other students from the chapter, and get info on KTH-wide sport events. They mostly interact on Facebook
            (link below) but they also make announcements on the chapter's Discord server.
            <br/>
            Contact:
            <ul>
                <li>Email: idrott@datasektionen.se</li>
                <li><a href="https://www.facebook.com/groups/datafotboll/">Facebook</a></li>
            </ul>
        </p>
    )
}

function Styrelsen() {
    return (
        <p>
            The chapter board (Swedish: Styrelsen) is the organ of the Media Technology chapter that oversees the chapter's activities.
            All committees' chairperson report to the board, which in turn discuss and makes decisions at the highest level in the chapter.
            Joining the board is an opportunity to influence the chapter. The board is also responsible for business issues and study monitoring.
            <br/>
            Contact:
            <ul>
                <li>Email: styrelsen@medieteknik.com</li>
            </ul>
        </p>
    )
}

function MediaElectionCommittee () {
    return (
        <p>
            The Election Committee (Swedish: Valberedningen) prepares and manages the elections for certain positions in the Media chatper.
            The committee receives nominations and candidacies, asses candidates with an interview, and make a review of the candidates for
            the next chapter meeting. The Election Committee works to keep elections democratic and ensure all candidates have an equal treatment
            and process.
            <br/>
            Contact:
            <ul>
                <li>Email: val@medieteknik.com</li>
            </ul>
        </p>
    )
}

function MediaStudyBoard() {
    return (
        <p>
            The Study Board (Swedish: Studienämnden) verifies that every student has a well-functioning education and safe
            study environment. This applies at both programme-level and course-level. If you have any problem with courses and
            programs, or have questions about them, you can contact the Study Board! Joining the committee lets you help everyone
            have a better education and you will have a better understanding of education at KTH.
            <br/>
            Contact:
            <ul>
                <li>Email: sno@medieteknik.com</li>
            </ul>
        </p>
    )
}

function KomN () {
    return (
        <p>
            The Communication Committee (Swedish: Kommunikationsnämnden) is the committee in charge of Media's external branding,
            e.g. they update Media's Instagram, Facebook, etc. They also take care of the communications within the chapter and
            announce events. Finally, they run a podcast on Spotify! In addition to this, they propose an advent calender made of
            24 short videos
            <br/>
            Contact:
            <ul>
                <li>Email: kommunikator@medieteknik.com</li>
            </ul>
        </p>
    )
}

function MBD () {
    return (
        <p>
            Searching for a job after KTH? Media's carrier fair (Swedish: Medias Branschdag) is a large event that lets you find jobs,
            seek degree project opportunities or simply enrich your network, it's up to you! Don't miss it!
            <br/>
            Contact:
            <ul>
                <li>Email: branschdag@medieteknik.com</li>
            </ul>
        </p>
    )
}

function MediaNLG () {
    return (
        <p>
            The Business Relations Group (Swedish: Näringslivsgruppen) initiate contacts with companies and provide students with opportunities
            to build a strong network of business contacts. Working for the Business Group makes it doubly as effective for you. Members
            organise events such as mingles or recruitement events.
            <br/>
            Contact:
            <ul>
                <li>Email: nlg@medieteknik.com</li>
            </ul>
        </p>
    )
}

function Festmästeriet () {
    return (
        <p>
            Party people, here is your stuff! The Party Committee (Swedish: Festmästeriet) is specialized in organizing and hosting gasques;
            traditional swedish student parties featuring a three course meal, fun activities and an afterparty open for everyone.
            Members of the committee can engage in various tasks, such as deciding the menu, doing PR (i.e. marketing), inventing fun
            competitions, or decorating the venue. Join them to maximise the fun of Media's parties.
            <br/>
            Contact:
            <ul>
                <li>Email: festmasteriet@medieteknik.com</li>
                <li>Instagram: @festmasteriet_medieteknik</li>
            </ul>
        </p>
    )
}

function FilmCommittee () {
    return (
        <p>
            Interested in films? The Film Committee (Swedish: Filmnämden) produces a high-effort film project for each reception.
            They handle every part of film-making, from screen-writing, to filming, post-production, etc. You can see
            their work on their social networks below.
            <br/>
            Contact:
            <ul>
                <li>Email: filmnamnden@medieteknik.com</li>
                <li>Instagram: @filmnamnden</li>
                <li><a href="https://youtube.com/@filmnamndenmedieteknik?si=MhexLexOo8W1N8eO">Youtube</a></li>
            </ul>
        </p>
    )
}

function PhotoGroup () {
    return (
        <p>
            Do you have an interest in photography? The Photo Group (Swedish: Fotogruppen) is a meeting place for all photography people of
            the Media chapter. You do not need to have technical knowledge of cameras, you can join even if you are only interested in looking
            at others' pictures. Some members in the committee have extensive technical knowledge, some are more on the art aspect, so
            there is much you can learn from them!
            <br/>
            Contact:
            <ul>
                <li>Email: fotogruppen@medieteknik.com</li>
            </ul>
        </p>
    )
}

function MediaSportsCommittee () {
    return (
        <p>
            Come combine your studies with fresh air, exercising and meeting new friends. The Sports Committee (Swedish: Idrottsnämnden) organizes
            sport activities for all Media students to enjoy.
            <br/>
            Contact:
            <ul>
                <li>Email: idrottsnamnden@medieteknik.com</li>
            </ul>
        </p>
    )
}

function Matlaget () {
    return (
        <p>
            Prepare your apron and best cooking ustensils, it's time to cook. The Food Team (Swedish: Matlaget) prepares the food
            for Media's chapter meetings, from planning what to cook, to buying the ingredients and finally cooking. The committee is open, i.e. anyone
            in the Media chapter can join the Food Team and cook as much (or as little) as they want. It's also a great oppportunity to learn cooking, or
            just to have fun!
            <br/>
            Contact:
            <ul>
                <li>Email: masterkock@medieteknik.com</li>
            </ul>
        </p>
    )
}

function MediaMärkt () {
    return (
        <p>
            Your tail-coat (Swedish: B-Frak) feels empty? Media Label (Swedish: Media Märkt) designs and sells patches so that no spot on your tail-coat feels
            like it misses something. You can also talk to them if you have questions about overalls.
            <br/>
            Contact:
            <ul>
                <li>Email: mediamarkering@medieteknik.com</li>
            </ul>
        </p>
    )
}

function Sånglederiet () {
    return (
        <p>
            The Song Team (Swedish: Sånglederiet) brings together song lovers to raise their voice in harmony on great songs. They don't stop
            at singing as they also juggle, and sometimes organize singing gasques.
            <br/>
            Contact:
            <ul>
                <li>Email: sanglederiet@medieteknik.com</li>
                <li>Email (head of committee): ofversangledare@medieteknik.com</li>
            </ul>
        </p>
    )
}



export default Committees;
