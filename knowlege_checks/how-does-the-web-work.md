## What is a network?
A network is group of  entities, or nodes, that are connected by some sort of relationship; at minimum there must be two nodes connected to make a network. In the context of the internet, it would be a group of computers connected by something physical like cables, or wirelessly like wifi or bluetooth. There is no limit to how many nodes can make up a network, just that there must be some kind of connection to one another. When drawn these connections are called edges.

## What is the internet?
The internet is a large network of computers accross the world connected by both physical and wireless means. This network was designed to handle various scenerios to make sure commuication from one computer to another would be fast and reliable. To make this possible, some computers are uniquely made to handle specfic tasks and protocols were put in place to handle the flow of commuication. 

## What is an ip address?
An internet protocal (IP) address is an identifier for computers that use the internet to communicate with one another. This standard for communication is called IP protocol. For one computer to talk to another computer, it must know its IP address. More on how computers get IP addresses later. 

## What is a router?
A router is a computer specifcally made to handle communications within networks so that messages sent from A to B doesnt accidently get sent from A to C. 

### Internal Network Example
![Internal Network](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/How_does_the_Internet_work/internet-schema-3.png) 

In larger networks with external communications, these routers can be linked to one another to connect from one network to another. To achieve the internet, we include modems that let these networks connect to the larger internet.

### Network Connected to the Internet
![Network Connected To Internet](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/How_does_the_Internet_work/internet-schema-7.png)

## What is an ISP?
An internet service provider (ISP) is an organization that manages resource for connections to the internet through special routers. Above picture shows how you can communicate from your network to another network. If you want to send a message to your carnal in Guerrero, you first send it to your router that sends it to the modem, that sends it your ISP, that sends it to another ISP that your friend uses that then sends it to their modem then router then to your computer. 

## What are packets and how are they used to transfer data?
Packets are chopped up pieces of data; almost like puzzle pieces. Data is more often than not too large to send in one go and is faster transferred if cut up and sent redundently to pass along to you. Its best to send redundently to multiple locations that way in case a packet gets lost, another one is sent via another route to get to you.

## What is a client?
A client is a device or user that connects to the web via the internet. The web is a service built on top of the internet infrastructure and is what we use when were on the "web". When we, the client, go to a website, we actually go to their server using a communication protocol and a messaging protocol that I will mention later. 

## What is a server?
A server is generally, just another computer; technically any computer can be a server, making the server more of a designated role. However, there are computers specifically designed to more efficiently, quickly, and reliably provide some kind of service to multiple clients concurrently. Services like email, database, web server, all of the above. It may or may not be connected to the internet. See this youtube video, [Servers vs Desktops](https://www.youtube.com/watch?v=UjCDWCeHCzY), for a more detailed explanation. 

## What is a webpage?
Webpages make up the content of a website. It is stored on a server somewhere on the internet.

## What is a web server?
A server that is connected to the internet and hosts webpages and websites. It can host multiple sites if needed as well as multiple instances of the site. A web server can communicate with clients through a communication protocol and a transmission protocol.
- Hyper Text Transfer Protocol (HTTP) is the defined language that clients and webservers use to speak. You can think of it as a report to be filled out that both parties understand that include sender information, routes it took to get there, and how to send messages back.
- Transmission Control Protocol/Internet Protocol (TCP/IP) are the rules on how to transmit messages. Think of it like the rules of the road with stop lights and what not.

## What is a web browser?
A web browser is a special application or program that can create requests and receive responses from web servers on the internet and make sense of the various operations and files used to render the website. Other applications can also send requests and receive responses, but browsers are special because they are especially designed to make interacting with web apps friendly. The web browser also has a suite of tools to inspect metadata about requests and responses from web servers as well as internal tracking tools for things like timing actions and storing common tasks.   

## What is a search engine?
A search engine is an index of various domain names for websites and pages that people can use to search through keywords or phrases. An example of one is google. It doesnt provide you with an IP address, but it does provide domains for webpages that contain the keywords you searched for. In order to get the IP address you use a DNS Request.

## What is a DNS request?
A DNS request is the lookup process to go from website domain name to actual ip address. It goes through a series of steps to go from domain name to IP address that I will list out in the last question.
 
## Which browser am I using?
Chrome.

## Explain what happens when you run a search on google
If you dont have a specific website in mind for something, you can use a search engine to do a very broad look up for webpages that have related content to your search. The search engine will take into account things like your location and cookies to help you find a more tailored list of sites that match your keyword. They also use very complex methods to crawl around on the web to find you what you need. Once you do click on what you need, it provides you with a domain name that you can then make a DNS request for then use TCP/IP ahd HTTP to communicate with the server that has the page youre interested in. See below for a list of steps.

1. Google search "how to make pozole"
2. Google returns you a list of webpages
3. You click one from `guerrero_recipes.com/pozole_verde`
4. Your computer doesnt know the IP address to go to so it uses a DNS request
5. It goes to the `.com` DNS server, also known as the Top Level Directory and asks for directions, it doesnt know, but knows someone who does, it gives you directions to that DNS server.
6. It goes to that DNS server and it gives you the IP address, you go back to your browser and hand it off for an HTTP message
7. You write a request HTTP message, include that you want to go to this webpage `pozole_verde` that is part of this website `guerrero_recipes.com` and send it to that IP address of that web server using TCP/IP, they agree and send you a response along with instructions on how to build the web page
8. You receive the response and get ready to build
9. The site sends you all the material it can
10. The material arrives at different times, but since you have build instructions, you build what you can as you receive it
11. They let you know they sent everything, you let them know everything was received and correctly built and boom! Pozole time!