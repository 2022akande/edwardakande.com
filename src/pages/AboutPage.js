import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
            <p>Hello, my name is Edward Akande and I am a Junior Web Developer based in Atlanta, Georgia.</p>

            <p>I started programming around the age of 11, I would develop web pages comprised exclusively of HTML.</p>

            <p>As I progressed I learned to incorporate powerful technologies like React and Bootstrap.</p>

            <p>My most includes personal projects and a few commissioned sites all of which can be found on the home page.</p>

            <p>My philosophy when it comes to web development can be summarized by the phrase "why not" I want to be a part of the wave of web developers</p>

            <p>who are pushing the envelope and erasing the limitations of what a website can be.</p>

            <p>It always brings me joy to see the full feature in-browser experiences like <a href="https://www.kapwing.com/" target="_blank" rel="noopener noreferrer">Kapwing</a> and <a href="https://pixlr.com/x/" target="_blank" rel="noopener noreferrer">Pixlr.</a></p>

            <p>Those developers say why not to extensive photo editing right in the browser, They say why not to editing entire videos from a website.</p>

            <p>I believe we will see a day where the only question standing between us and the web design projects of the future is simply: why not?</p>

            <h1>Technologies</h1>

            <h3>Client Side</h3>

            <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Bootstrap</li>
                <li>Javascript</li>
                <li>Jquery</li>
                <li>React</li>
            </ul>

            <h3>Server Side</h3>
            <ul>
                <li>PHP</li>
                <li>Python</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>SQL</li>
                <li>Mongo.db</li>
            </ul>
            </Content>
        </div>
    );

}

export default AboutPage;