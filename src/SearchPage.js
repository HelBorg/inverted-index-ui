import React, {Component} from 'react';
import {Col, Container, Form, FormGroup, Input, Jumbotron, ListGroup, ListGroupItem, Navbar, Nav, NavItem, NavLink,
    DropdownMenu, DropdownItem, DropdownToggle, UncontrolledDropdown, NavbarBrand, InputGroupAddon, Button, InputGroup} from "reactstrap";
import Highlighter from "react-highlight-words";

class SearchPage extends Component {

    constructor(props) {
        super(props);
        this.state = {texts: [], words: [], search: '', open: ''};
        this.handleFind = this.handleFind.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        console.log("handleChange " + event.target.value);
        this.setState({search: event.target.value});
    }

    async find(string) {
        let result_texts = [];
        let words = string.trim().replace(/\s/g, ',').replace(/\s/g, '');
        let words1 = string.trim().split(/\s/g);
        console.log("Sending POST request to /api/invertedindex?words with words = " + words);
        await fetch('api/invertedindex?words=' + words).then(async data => {
            let texts = await data.json();
            let trimText = [];
            console.log("texts " + texts);
            for (let i = 0; i < words1.length; i++) {
                trimText = trimText.concat(texts.map(text => text.text)
                    .flatMap(text =>
                        this.getMatches(words1[i], text)
                            .map(x =>  {
                                let to = text.substring(x + 100, x + 120).indexOf(" ");
                                console.log(text + " " + to);
                                return text.substring(x - 100, x + 100 + to).concat(" ...");
                            })));
            }
            console.log("trimTexts " + trimText);
            this.setState({texts: trimText, words: words1})
        });
    }

    async handleFind() {
        console.log("handleFind " + this.state);
        await this.find(this.state.search);
    }

    getMatches(needle, haystack) {
        let myRe = new RegExp("(?:^|\\s)" + needle + "(?:^|\\s)((?!\\W(?=\\w))|(?=\\s))", "gi"),
            myArray, myResult = [];
        while ((myArray = myRe.exec(haystack)) !== null) {
            myResult.push(myArray.index);
        }
        return myResult;
    }

    render() {let {texts, words} = this.state;
        let list_not_empty = false;
        let list = texts.map(text => {
                list_not_empty = true;
            return <div class="result">
                <ListGroupItem className={"result_text"}>
                    <Highlighter
                        searchWords={words}
                        highlightClassName="highlightClass"
                        autoEscape={true}
                        textToHighlight={text}
                    />

                </ListGroupItem>
            </div>;
            }
        );
        // list_not_empty = true;

        return (
            <div>
                <Navbar color="light" light expand="md">
                    <Nav className="mr-auto" navbar>
                        <NavbarBrand href="/">WebPoisk!!!!</NavbarBrand>
                        <NavItem>
                            <NavLink href="/components/">Components</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/add">Add</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                GitHub
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem href="/https://github.com/HelBorg/inverted-index-ui">
                                    Front end
                                </DropdownItem>
                                <DropdownItem href="https://github.com/Yowzah/InvertedIndex">
                                    Back end
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                    <Nav className={list_not_empty ? "search_nav" : "hidden"}>
                        <InputGroup>
                            <Input type="text"
                                   name="text"
                                   id="text"
                                   placeholder="Write down index"
                                   value={this.state.search}
                                   onChange={this.handleChange}/>
                            <InputGroupAddon addonType="append">
                                <Button color="secondary" onClick={this.handleFind}>Search</Button>
                            </InputGroupAddon>
                        </InputGroup>
                    </Nav>
                </Navbar>
                <div className={list_not_empty ? "hidden" : "search"}>
                    <h2 class="title">Web Search</h2>
                    <Form class="search">
                        <InputGroup>
                            <Input type="text"
                                   name="text"
                                   id="text"
                                   value={this.state.search}
                                   onChange={this.handleChange}/>
                            <InputGroupAddon addonType="append">
                                <Button color="secondary" onClick={this.handleFind}>Search</Button>
                            </InputGroupAddon>
                        </InputGroup>
                    </Form>
                </div>
                <div className={list_not_empty ? "text" : "hidden"}>
                    <h2 className="title">Results</h2>
                    <ListGroup>
                        {list}
                    </ListGroup>
                </div>
            </div>);
    }
}

export default SearchPage;