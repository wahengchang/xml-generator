
class Content extends React.Component {
    constructor (props) {
        super(props)
    }
    
    componentDidMount() {
    }

    //suppressContentEditableWarning is as same as contentEditable
    render() {
        return (
            <div className="xmlWrapper">
                <xmp>
                    {this.props.xmlString}
                </xmp>
                <style jsx>{`
                    .xmlWrapper {
                        margin: 20px;
                        padding: 20px;
                        border: 1px solid #dddddd;
                        background: #eeeeee;
                        color: #555555;
                    }
                `}</style>
            </div>
        )
    }
}

export default Content

