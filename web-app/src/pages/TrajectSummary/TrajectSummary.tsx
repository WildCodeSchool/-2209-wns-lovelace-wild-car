import Counter from './Counter';
import {
  Main,
  Recap,
  BigTitle,
  RecapContainer,
  Title,
  Departure,
  Arrival,
  DriveDate,
  NumberPlaceSetted,
  FormContainer,
  ButtonContainer,
  MainContainer,
} from './TrajectSummary.styled';

const TrajectSummary = () => {
  return (
    <Main>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          /* await submit(); */
        }}
      >
        <BigTitle>Finalisez la création de votre trajet !</BigTitle>

        <MainContainer>
          <Recap>
            <RecapContainer>
              <Title>Récapitulatif</Title>
              <Departure>départ : </Departure>
              <Arrival>arrivée : </Arrival>
              <DriveDate>date : </DriveDate>
              <NumberPlaceSetted>
                nombre de place disponible :{' '}
              </NumberPlaceSetted>
            </RecapContainer>
          </Recap>
          <FormContainer>
            <p style={{ fontWeight: 900, fontSize: 18 }}>
              Informations complémentaires
            </p>

            <fieldset id="groupe1" style={{ border: 0 }}>
              acceptez vous les animaux ?
              <label>
                <input
                  type="radio"
                  required
                  id="lastName"
                  name="groupe1"
                  value={''}
                  onChange={(event) => {
                    /*setLastName(event.target.value);*/
                  }}
                />
                oui
              </label>
              <label>
                <input
                  type="radio"
                  required
                  id="lastName"
                  name="groupe1"
                  value={''}
                  onChange={(event) => {
                    /*setLastName(event.target.value);*/
                  }}
                />
                non
              </label>
            </fieldset>
            <fieldset id="groupe2" style={{ border: 0 }}>
              acceptez vous les animaux ?
              <label>
                <input
                  type="radio"
                  required
                  id="lastName"
                  name="groupe2"
                  value={''}
                  onChange={(event) => {
                    /*setLastName(event.target.value);*/
                  }}
                />
                oui
              </label>
              <label>
                <input
                  type="radio"
                  required
                  id="lastName"
                  name="groupe2"
                  value={''}
                  onChange={(event) => {
                    /*setLastName(event.target.value);*/
                  }}
                />
                non
              </label>
            </fieldset>
            <fieldset id="groupe3" style={{ border: 0, display: 'flex' }}>
              niveau discussion :
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label>
                  <input
                    type="radio"
                    required
                    id="lastName"
                    name="groupe3"
                    value={''}
                    onChange={(event) => {
                      /*setLastName(event.target.value);*/
                    }}
                  />
                  je suis bavard
                </label>
                <label>
                  <input
                    type="radio"
                    required
                    id="lastName"
                    name="groupe3"
                    value={''}
                    onChange={(event) => {
                      /*setLastName(event.target.value);*/
                    }}
                  />
                  je parle quand je suis à l’aise
                </label>
                <label>
                  <input
                    type="radio"
                    required
                    id="lastName"
                    name="groupe3"
                    value={''}
                    onChange={(event) => {
                      /*setLastName(event.target.value);*/
                    }}
                  />
                  je ne souhaite pas discuter
                </label>
              </div>
            </fieldset>
            <fieldset
              id="groupe4"
              style={{ border: 0, display: 'flex', alignItems: 'center' }}
            >
              prix de votre trajet :
              <label>
                <Counter />
              </label>
            </fieldset>
          </FormContainer>
        </MainContainer>
        <ButtonContainer>
          <button
            style={{
              paddingTop: 12,
              paddingBottom: 12,
              paddingLeft: 50,
              paddingRight: 50,
              backgroundColor: 'white',
              color: ' #535353',
              borderRadius: 30,
              border: 'none',
              fontSize: 20,
            }}
          >
            go !
          </button>
        </ButtonContainer>
      </form>
    </Main>
  );
};

export default TrajectSummary;
