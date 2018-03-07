import {getFields} from '../lib/xmlConverter'

class Content extends React.Component {
    constructor (props) {
        super(props)

        this.onChange = this.onChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            xmlString: props.xmlString || 'default'
        }
    }
    onChange (field, val) {
        return this.setState({[field]: val})
    }
    handleSubmit(event) {
        this.props.updateXml(this.state);
        event.preventDefault();
    }
    render() {
        const _onChange = (field) => e => this.onChange(field, e.target.value)

        return (
            <div className="contentWrapper">
                <form className="pure-form" onSubmit={this.handleSubmit}>
                    <fieldset className="pure-group">
                        {getFields().map((field, index)=>
                            <input
                                key={index}
                                type="text"
                                className="pure-input-1"
                                placeholder={field}
                                onChange={_onChange(field)}
                            />)}
                    </fieldset>
                    <button type="submit" className="pure-button pure-input-1 pure-button-primary"> Submit</button>
                </form>

                <style jsx>{`
                .contentWrapper {
                    margin: 20px;
                    padding: 20px;
                }
                `}</style>
            </div>
        )
    }
}

export default Content

