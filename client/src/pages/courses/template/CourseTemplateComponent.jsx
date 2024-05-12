import React, { useState } from 'react';
import "./course-component-styles.css";

const coursesData = {
  "Before Watching Courses": {
    sections: [
      { sectionName: "How To Get The Most Out Of These Courses", link: "https://www.loom.com/embed/673037d097824072930443074b00c3fc?sid=b5f146af-708a-40f9-a46b-3b93c0fd0723"},
    ]
  },

  "Enhanced Masculinity Course": {
    sections: [
      { sectionName: "Basics", link: "https://www.loom.com/embed/9a175b42eba8451388e16947a20da1d5?sid=abb76fb6-3440-4c44-94e0-4ecada734c7c" },
      { sectionName: "The Masculine Man", link: "https://www.loom.com/embed/592c04d86e8644f3946ccd77797dac51?sid=599add78-ab31-4ff3-bffb-193c797c1a3b"},
      { sectionName: "The Feminine Gifts", link: "https://www.loom.com/embed/0adf9edb9b7d418183d127b1bd3651c0?sid=5d9c6ec9-e3f4-4185-b27b-2d132740095b" },
      { sectionName: "Using Red Pill To Attract", link: "https://www.loom.com/embed/368976a8976f476785f8a4b6b75241ab?sid=3e108979-4a21-4086-a877-c1e1cd6e582e" },
      { sectionName: "Hard D Energy", link: "https://www.loom.com/embed/682cad824d7d4e4b9bd4436032bbd9d5?sid=dc64b902-a882-4a06-97a5-57c6d7bd1fb1" },
      { sectionName: "Levels", link: "https://www.loom.com/embed/9330963c351d4a239c15b5abfdedea7d?sid=9fb89e0a-4702-42c0-9dbf-8598cd9f1126" },
    ]
  },
  // Add more courses here
  "Tribe Leader Course": {
    sections: [
      { sectionName: "The Tribe Leader Course", link: "https://www.loom.com/embed/d3c42774c2be4f1588415117484d00e6?sid=65b14225-8277-4e46-8eb1-b4917dfd80ba"},
      { sectionName: "Mindset", link: "https://www.loom.com/embed/d165b18b099d461fad703174caf09d08?sid=804745df-ddf8-4d20-a75b-129f6e0e6fff"},
      { sectionName: "The Art Of Charisma", link: "https://www.loom.com/embed/8be2bbb35cbd48fa9964777f7c4d0ee7?sid=4ad44a3a-cf0b-4a7c-852d-6f6df53e207b" },
      { sectionName: "Mission", link: "https://www.loom.com/embed/c922da86debc4bcca6939698003a1bd4?sid=9faa2545-4fa4-4948-a5a0-9cace661ebab" },
      { sectionName: "BONUSES", link: "https://www.loom.com/embed/1df3a72ec2974c5d9273a201601fdac0?sid=760d0bc4-3c2d-4427-8893-aa05e5306bd9"},
    ]
  },
  "Hack The School System Course": {
    sections: [
      { sectionName: "Why You Need This Course", link: "https://www.loom.com/embed/b4cbe2bf0e9344e2910e4678f763c540?sid=58b59bdc-c0dc-4a0b-acde-35d1c134ef2f"},
      { sectionName: "Focus", link: "https://www.loom.com/embed/82328f7377734c84ac9285b7bbd27ed8?sid=aaf459c9-0fe9-433b-8012-cab5554493ec"},
      { sectionName: "PPP", link: "https://www.loom.com/embed/f15eaaced4f74fdea0673db15f7d353a?sid=9871627c-2a73-499c-ab9c-404466a0ea60"},
      { sectionName: "Memory", link: "https://www.loom.com/embed/61c10874ff6049cd8184ac611dd6dfa3?sid=e1fe0c19-7567-4106-8998-3ab248514546"},
      { sectionName: "Play The Game", link: "https://www.loom.com/embed/365d65a263fe471997d0b00f22048365?sid=60fa1a3d-c07b-4a8f-9661-af4d0b18959c"},
      { sectionName: "Full Study Guide", link: "https://www.loom.com/embed/b8160ab8e0ec43e5a9d6e35279e50a89?sid=64422774-ebf3-4fb6-b285-d2c7edf53c22"},
      { sectionName: "Apply This To The Exam", link: "https://www.loom.com/embed/dfa9b71756a74384a2028a8981d5caaa?sid=6db96b68-27b8-42fe-970c-1163e6c32624"},

    ]
  },
  "Alpha Social Skills Course": {
    sections: [
      { sectionName: "Body Language", link: "https://www.loom.com/embed/f5997f95f061481f8bd17cff658e89d2?sid=1f82ec51-7141-43cc-95dc-6e560e290d9c"},
      { sectionName: "Speaking", link: "https://www.loom.com/embed/1831b4af0a1e4de4b474b4eaa5cef114?sid=86ccb4bf-13fb-4244-8fac-5dee3d41668e"},
      { sectionName: "Attract Others To You", link: "https://www.loom.com/embed/d9e68282c09a432c99a2cfcdc81370f9?sid=cdaf3f18-4589-4a37-a799-d2491f96db7f"},
      { sectionName: "Energy", link: "https://www.loom.com/embed/b37f409e652a4ab0b87efd650e28b835?sid=1396f805-9336-4206-9a83-28e966c73e66"},
      { sectionName: "Mindset", link: "https://www.loom.com/embed/7b63dd9bcecd46cba5fc759d81214034?sid=eb978901-8d7c-4912-a540-844e743ada2c"},
    ]
  },
  "Winner Mindset Course": {
    sections: [
      { sectionName: "Presence Is Power", link: "https://www.loom.com/embed/c6427f271e5a431e9a86f7f03ba41cdf?sid=a9bc52c9-790e-4dda-8d13-9887384285a5"},
      { sectionName: "My Responsibility", link: "https://www.loom.com/embed/f3e1c18f0509439abd9ec1762f1645ca?sid=a07affa2-4442-4dae-9130-60244df4f2b1"},
      { sectionName: "Reward and Punishment", link: "https://www.loom.com/embed/4449277798004e5dba7d9847affd82b4?sid=938b5108-2a24-4009-9498-6c71a60f4d8d"},
      { sectionName: "Energy", link: "https://www.loom.com/embed/54756f9701814518aaadcb4a98313262?sid=a401e349-a30a-413c-9006-1d14e9c79c8c"},
      { sectionName: "Power Of Thought, Desire and Faith.", link: "https://www.loom.com/embed/a2035291abb944c9a769e5002d405e1a?sid=7b854143-c8c5-4023-8051-97339062696b"},
      { sectionName: "Brain Points", link: "https://www.loom.com/embed/d91957dc15eb4b1083f28b12a402e01f?sid=ecad9b37-e223-4da0-8bd3-c3e37d40861f"},
      { sectionName: "Identity", link: "https://www.loom.com/embed/d2dcf29473db4ef1ba8d26104067ddf5?sid=9a2ff36d-5634-427c-8d4c-e4086a0fe14d"},
    ]
  },

  "Men's Life Mastery Course": {
    sections: [
      { sectionName: "Time Management & Productivity", link: "https://www.loom.com/embed/494029a3edde42eebf6c359411f7e423?sid=e883ce04-d674-408e-b2da-c8bfd9c99002"},
      { sectionName: "Discipline", link: "https://www.loom.com/embed/63a40294d62241cb9abe6676acc0d8ca?sid=29c1a730-264b-44d9-895a-0a4fbad4f3e7"},
      { sectionName: "Willpower", link: "https://www.loom.com/embed/eef047b64fce4b45a6bb3bc44f77d7a1?sid=76853b6b-6511-4178-ae23-4eb8468e64b7"},
      { sectionName: "Purpose & Work", link: "https://www.loom.com/embed/57de4fb75a5a4332b9cb9df5f57b9417?sid=d0e0baf7-c4a7-4e3d-af9a-f3a8a0aa3704"},
      { sectionName: "Power Of Dopamine", link: "https://www.loom.com/embed/d0005d49375749ec90322ac5420035be?sid=9ff51280-a151-4ffc-a030-f9ed4ec127ad"},
    ]
},

"Up Your Health Up Your Wealth Course": {
  sections: [
    { sectionName: "Sleep", link: "https://www.loom.com/embed/f9231207a2d64c1db58ad5bacebd33b7?sid=d175bc70-0baf-4f76-8199-c46c20de46ef"},
    { sectionName: "The Hunter Diet", link: "https://www.loom.com/embed/9a0858a10d1d426a9231942b8d6a72c5?sid=39e9aa86-888f-4572-ab82-bdd6e3afac2d"},
    { sectionName: "Fitness", link: "https://www.loom.com/embed/55910f10851143f4bec0b54e9825b493?sid=744531d4-65d4-489c-b5cf-a3bdbc4c1f83"},
    { sectionName: "Brain", link: "https://www.loom.com/embed/724b58610e5942af9a9aa92784761098?sid=fc76d949-dc9a-4a4c-922b-e84c43ddedaf"},
    { sectionName: "Breath", link: "https://www.loom.com/embed/0a78de8ea1714e2b9407ef49877612f5?sid=e1f0bd9a-b112-476e-82c9-a955fcf82de8"},
    { sectionName: "Testosterone", link: "https://www.loom.com/embed/fcee0e45297342189232faacd1c3e055?sid=2e6a888c-10ac-41fc-8d04-cbcc4adf9bc0"},
  ]
},

"Killer Habits Course": {
  sections: [
    { sectionName: "Bad Habits: Porn & Fap", link: "https://www.loom.com/embed/dbf47d498e4a4460be1c7e89c65ff47b?sid=7844e1ce-fce7-4ba9-bd4c-25f0845c3de4"},
    { sectionName: "Bad Habits: Phone & Social Media", link: "https://www.loom.com/embed/eb7e9c95d066471cb02562f3ff448c54?sid=61e66092-570f-425b-a98e-c7bc3f90e304"},
    { sectionName: "Bad Consumption", link: "https://www.loom.com/embed/19195f4fb8974ca3b571eb012c3cfe2e?sid=f35a956c-97fc-4eaa-976c-2a691b29dcf5"},
    { sectionName: "Bad Habits: Partying & Horrible Sleep", link: "https://www.loom.com/embed/850eec123f8a4e109eac162241a295ea?sid=a7535406-46a2-46d9-9ff9-9dbf8ff38f7b"},
    { sectionName: "Bad Habits: Videogames & Retarded Content", link: "https://www.loom.com/embed/51dc594b473940ef81a68f7723fcd7b0?sid=296465c2-e693-46a0-836b-158d4128ce76"},
    { sectionName: "Meditating & Journaling", link: "https://www.loom.com/embed/90f65349ef784730b2825a4ab8cd4f10?sid=d57eb459-c244-4ad1-ae43-25b99b15e996"},
    { sectionName: "Cold Showers & Stretching", link: "https://www.loom.com/embed/69f5d920ca754a72b2d404e9daa4ee18?sid=9dfb6300-cc7f-4d69-82b0-f38b5f770b17"},
    { sectionName: "Reading + Learning & Nature Time", link: "https://www.loom.com/embed/33665296a71a41b784d21cea13e6cc5b?sid=a539e3be-36ef-49e5-ad2b-8deb71746093"},
    { sectionName: "Affirmations & Visualisations", link: "https://www.loom.com/embed/41a3c80124c74fd7a264fb7111ad7a64?sid=dc480080-30ae-4941-b312-d036ebbdf416"},
    { sectionName: "How To Get Consistent In These Habits", link: "https://www.loom.com/embed/1247ad30a6924940b2e8d591d1dc06c5?sid=b7dcea4a-bbf4-429d-b8eb-5a8e6087c4ef"},
  ]
},

}

function CourseTemplateComponent(props) {
  const [selectedSection, setSelectedSection] = useState(null);

  const handleSelectionChange = (index) => {
    setSelectedSection(index);
  };

  const courseData = coursesData[props.courseKey];

  if (!courseData) {
    return <div>No course found for the key: {props.courseKey}</div>;
  }

  const returnToCourses = function() {
    window.location.href = "/courses"
  }
  return (
    <div className='course-wrapper'>
      <div className='course-nav'>
        <span className='course-title' onClick={returnToCourses}>{props.courseKey}</span>
      </div>
      <div className='course-main-body'>
        <div className='course-sections'>
          <div className='course-section-container'>
            {/* Render course sections */}
            {courseData.sections.map((section, index) => (
              <div className='section' key={index} onClick={() => handleSelectionChange(index)}>
                <span className='section-title'>{section.sectionName}</span>
              </div>
            ))}
          </div>
        </div>
        <div className='course-video-container'>
          <div className='course-video'>
            {/* Render selected course section's video */}
            {selectedSection !== null && (
              <iframe
                className='course-video-iframe'
                src={courseData.sections[selectedSection].link}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseTemplateComponent;
