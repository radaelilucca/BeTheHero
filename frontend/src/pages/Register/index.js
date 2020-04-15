import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import { FiArrowLeft } from "react-icons/fi";
import PhoneInput, { formatPhoneNumberIntl } from "react-phone-number-input";

import {
  Container,
  Content,
  Section,
  Form,
  Input,
  Select,
  InputGroup,
  Button,
} from "./styles";

import api from "../../services/api";
import logo from "../../assets/logo.svg";

export default function Register() {
  const history = useHistory();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");

  async function handleRegister(e) {
    e.preventDefault();
    const data = {
      name,
      whatsapp,
      email,
      city,
      uf,
    };

    try {
      const response = await api.post("/ongs", data);

      await Swal.fire({
        title: `Anote o seu ID de acesso: ${response.data}`,
        icon: "success",
        confirmButtonColor: "#e02041",
        confirmButtonText: "Anotado!",
      }).then(async (result) => {
        if (result.value) {
          history.push("/");
        }
      });
    } catch (error) {
      Swal.fire({
        title: `Ocorreu um erro no cadastro.`,
        text: "Verifique os dados e tente novamente.",
        icon: "error",
        confirmButtonColor: "#e02041",
        confirmButtonText: "Ok!",
      });
    }
  }

  return (
    <Container>
      <Content>
        <Section>
          <img src={logo} alt="Be The Hero" />
          <h1>Cadastro</h1>

          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrar
            os casos da sua ONG.
          </p>
          <Link to="/">
            <FiArrowLeft size={24} color="#e02041" />
            Já tenho cadastro
          </Link>
        </Section>
        <Form onSubmit={handleRegister}>
          <Input
            placeholder="Nome da ONG"
            value={name}
            required
            minLength={3}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <Input
            placeholder="E-mail"
            value={email}
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <PhoneInput
            className="phone"
            placeholder="WhatsApp com DDD"
            required
            value={whatsapp && formatPhoneNumberIntl(whatsapp)}
            onChange={setWhatsapp}
            defaultCountry="BR"
          />
          <InputGroup>
            <Input
              placeholder="Cidade"
              value={city}
              required
              onChange={(e) => {
                setCity(e.target.value);
              }}
            />

            <Select
              value={uf}
              onChange={(e) => {
                setUf(e.target.value);
              }}
            >
              <option value="UF">UF</option>
              <option value="AC">AC</option>
              <option value="AL">AL</option>
              <option value="AP">AP</option>
              <option value="AM">AM</option>
              <option value="BA">BA</option>
              <option value="CE">CE</option>
              <option value="DF">DF</option>
              <option value="ES">ES</option>
              <option value="GO">GO</option>
              <option value="MA">MA</option>
              <option value="MT">MT</option>
              <option value="MS">MS</option>
              <option value="MG">MG</option>
              <option value="PA">PA</option>
              <option value="PB">PB</option>
              <option value="PR">PR</option>
              <option value="PE">PE</option>
              <option value="PI">PI</option>
              <option value="RJ">RJ</option>
              <option value="RN">RN</option>
              <option value="RS">RS</option>
              <option value="RO">RO</option>
              <option value="RR">RR</option>
              <option value="SC">SC</option>
              <option value="SP">SP</option>
              <option value="SE">SE</option>
              <option value="TO">TO</option>
              <option value="EX">EX</option>
            </Select>
          </InputGroup>
          <Button type="submit">Cadastrar</Button>
        </Form>
      </Content>
    </Container>
  );
}
