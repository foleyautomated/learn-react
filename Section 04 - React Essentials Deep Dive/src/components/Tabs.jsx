export default function Tabs({ children, buttons, ButtonsContainer = "menu"}) {
    // const ButtonsContainer = buttonsContainer //Probably not necessary, but showcases how to dynamically set tag type
    return (
        <>
            <ButtonsContainer>
            {buttons}
            </ButtonsContainer>
            {children}
        </>
    )
}