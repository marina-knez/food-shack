import { NotFoundPageContainer, NotFoundText } from './page-404.styles';

const Page404 = () => {

    return (
        <NotFoundPageContainer>
                <NotFoundText>Recipe not found</NotFoundText>
                <div style={{ width: '100%', height: '0', paddingBottom: '61%', position: 'relative' }}>
                    <iframe
                        src="https://giphy.com/embed/SuHUqaOZM5GNz4hqCL"
                        title="Recipe not found"
                        style={{ position: 'absolute', height: '100%', width: '100%', frameBorder: '0' }}
                        className="giphy-embed"
                        allowFullScreen
                    ></iframe>
                </div>
            </NotFoundPageContainer>
    )
};

export default Page404;