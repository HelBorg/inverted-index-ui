import React, {Component} from 'react';
import {Col, Container, Form, FormGroup, Input, Jumbotron, Row, Navbar} from "reactstrap";

class SearchPage extends Component {

    constructor(props) {
        super(props);
        this.state = {texts: [], search: '', isLoading: true};
        this.handleFind = this.handleFind.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        console.log(event.target.value);
        this.find(event.target.value);
        this.setState({search: event.target.value});
    }

    componentDidMount() {
        this.setState({isLoading: true});
        fetch('/api/invertedindex').then(async data => {
            var texts = await data.json();
            var trimText = [];
            console.log(texts);
            console.log(trimText);
            this.setState({
                texts: trimText,
                isLoading: false
            })
        });
    }


    async find(string) {
        let words = string.trim().replace(/\s/g, ',').replace(/\s/g, '');
        let words1 = string.trim().split(/\s/g);
        await fetch('/api/invertedindex?words=' + words).then(async data => {
            let texts = await data.json();
            let trimText = [];
            console.log(texts);
            console.log(words1);
            for (let i = 0; i < words1.length; i++) {
                trimText = trimText.concat(texts.map(text => text.text)
                    .flatMap(text => this.getMatches(words1[i], text).map(x => text.substring(x - 100, x + 100))));
            }
            console.log(trimText);
            this.setState({texts: trimText, isLoading: false})
        });
    }

    async handleFind() {
        console.log(this.state);
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

    render() {
        let {isLoading, texts} = this.state;
        let list = texts.map(text =>
            <Row><Col align="justify">{text}</Col></Row>
        );

        isLoading = false;
        if (isLoading) {
            return (
                <div>
                    <Jumbotron fluid>
                        <Container fluid>
                            <h1 className="display-3">Please wait</h1>
                            <p className="lead">Loading...</p>
                        </Container>
                    </Jumbotron>
                </div>
            );
        }

        return (
            <div class="text">
                <h3 class="title">Search</h3>
                <Form>
                    <FormGroup>
                        <Input type="text" name="text" id="text" placeholder="Write down index"
                               onChange={this.handleChange}/>
                    </FormGroup>
                </Form>
            </div>);
    }
}

export default SearchPage;