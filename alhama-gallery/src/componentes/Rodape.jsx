import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Rodape() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Conecte-se com nossas redes socias!</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Alhama
              </h6>
              <p>
                Empresa voltada a demostrar tudo que há de melhor no mundo!
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Fotos
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Vistas inexplicáveis
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Pontos turísticos
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  O melhor do mundo
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Produtos
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Configurações
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Ordens
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Ajuda
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contanto</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                João Pessoa- AV. Primeiro de Maio
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                Alhama@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> 40022922
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> 05002022
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
      </div>
    </MDBFooter>
  );
}