import MySkill from "./components/MySkill/MySkill.jsx";
import DesiredSkill from "./components/DesiredSkill/DesiredSkill.jsx";
import Container from "./components/Container/Container.jsx";
import phpImg from "./assets/images/php.png";
import cssImg from "./assets/images/css.png";
import javascriptImg from "./assets/images/js.png";
import htmlImg from "./assets/images/html.png";
import avatarImg from "./assets/images/avatar.jpg";
import ProfileCard from "./components/ProfileCard/ProfileCard.jsx";

const skills = [{name: 'HTML', img: htmlImg, alt: 'HTML logo'},
    {name: 'CSS', img: cssImg, alt: 'CSS logo'},
    {name: 'JavaScript', img: javascriptImg, alt: 'JavaScript logo'},
    {name: 'PHP', img: phpImg, alt: 'PHP logo'},]
const desiredSkills = ['NodeJS', 'TypeScript', 'React', 'PostgreSQL', 'ExpressJS', 'Docker',
    'Redux', 'Webpack', 'Git', 'Redis']

function App() {
    return (
        <>
            <ProfileCard name='Ослин Артем Андреевич' img={avatarImg} alt='avatar'/>
            <h1>Мои компетенции:</h1>
            <Container>
                {skills.map((skill) => (
                    <MySkill alt={skill.alt} img={skill.img} skill={skill.name} key={skill.name}/>
                ))}
            </Container>
            <h1>Чему я хочу научиться:</h1>
            <Container>
                {desiredSkills.map(skill => (
                    <DesiredSkill skill={skill} key={skill}/>
                ))}
            </Container>
        </>
    )
}

export default App
