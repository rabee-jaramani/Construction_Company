import React from 'react'
import proj1 from './images/proj1.jpg';
import proj2 from './images/proj2.jpg';
import proj3 from './images/proj3.jpg';
export default function LAYOUT() {
    return (
        <>       
    <div className="layout"  id="home">
           <div className="layout-header"> 
            <h1>“Good buildings come from good people,
             and all problems are solved by good design.” — Stephen Gardiner</h1>
            <p>We are proud to announce that BuildingConnected has moved its headquarters to the historic San Francisco Chronicle building in downtown San Francisco. Our team, headquartered in San Francisco with offices in New York, has grown over 150 percent over the past year. Our new headquarters is 34,000-square-feet, spans two floors and includes amenities such as three kitchens, a fully stocked snack and coffee bar, bike storage and lockers, a pool table, a game area, multiple lounges and co-working spaces, as well as a large all-hands event space,
                 a library for quiet work, easy access to public transportation, and a dog-friendly environment.</p>
            </div>
        <div className="projects-title" id="projects">Our Projects</div>
        <div className="projects-container">
            <div className="proj1">
                <div className="proj-title">Dubai Marina</div>
                <div className="proj-img"><img src={proj1} alt=""/></div>
                <div className="proj-description">technical innovations, training and development programs are
                 provided for our experienced staff strategically with all our divisions and as well update our
                  policies and procedures accordingly.</div>
            </div>

            <div className="proj2">
                <div className="proj-title">Mrina Walk</div>
                <div className="proj-img"><img src={proj2} alt=""/></div>
                <div className="proj-description">Jamaheer have been carrying out a wide range of Electromechanical 
                installation Residential and Commercial Towers, Logistics Facilities, Institutional projects like
                 Hospitals, Schools, Colleges etc.,</div>
            </div>

            <div className="proj3">
                <div className="proj-title">SSL 877 Kuwait</div>
                <div className="proj-img"><img src={proj3} alt=""/></div>
                <div className="proj-description">including Industrial Air-conditioning and Chilled Water Process Cooling system.
                 Whilst our core competency lies in these specialised areas and turnkey Projects, </div>
            </div>

            <div className="proj4">
                <div className="proj-title">Tiger 1288 Suadi Arabia</div>
                <div className="proj-img"><img src={proj1} alt=""/></div>
                <div className="proj-description">Jamaheer has a unique culture providing exceptional services to 
                our customers and committed to exceeding their expectations.</div>
            </div>

            <div className="proj5">
                <div className="proj-title">Shikh Zaied Road</div>
                <div className="proj-img"><img src={proj2} alt=""/></div>
                <div className="proj-description">Our Maintenance Division is highly regarded with its Facility 
                Maintenance works of all systems including Civil works under the Annual Maintenance Contract.</div>
            </div>

            <div className="proj6">
                <div className="proj-title">Expo2022 UAE</div>
                <div className="proj-img"><img src={proj3} alt=""/></div>
                <div id="services" className="proj-description">Our management strategy is to offer our clients 
                a high quality workmanship with extremely reliable, efficient and economical systems at a reasonable price.
                 To keep up our pace with ongoing</div>
            </div>
        </div>
    </div> 
        </>
    )
}
