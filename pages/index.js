import Content from '../components/Content'
import XmlTextarea from '../components/XmlTextarea'
import {converter} from '../lib/xmlConverter'

class Container extends React.Component {
    constructor (props) {
        super(props)
        this.updateXml = this.updateXml.bind(this);
        this.state = {xmlString: ''}
    }
    updateXml(data){
        console.log('-=-=-= updateXml -=-=-=')
        this.setState({xmlString: converter(data)})
    }
    componentDidMount() {
    }
    render() {
        return (
            <div>
                <Content updateXml={this.updateXml} />
                <XmlTextarea xmlString={this.state.xmlString}/>
            </div>
        )
    }
}

export default Container