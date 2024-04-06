
import AnimatedPage from './AnimatedPage';

const StudentForm = ({ formData, handleChange}) => {

  console.log("student id:", formData.student_id)
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('student_id', formData.student_id);
    
    formDataToSend.append('f_name', formData.f_name);
    formDataToSend.append('m_name', formData.m_name);
    formDataToSend.append('l_name', formData.l_name);
    formDataToSend.append('birth_date', formData.birth_date);
    formDataToSend.append('birth_place', formData.birth_place);
    formDataToSend.append('gender', formData.gender);
    formDataToSend.append('marital_status', formData.marital_status);
    formDataToSend.append('religion', formData.religion);
    formDataToSend.append('country', formData.country);
    formDataToSend.append('acr', formData.acr);
    
    const formDataToSendAdd = new FormData();
    formDataToSendAdd.append('stdnt_id', formData.f_name);
    formDataToSendAdd.append('email', formData.email);
    formDataToSendAdd.append('contact_number', formData.contact_number);
    formDataToSendAdd.append('citizenship', formData.citizenship);
    formDataToSendAdd.append('city_address', formData.city_address);
    formDataToSendAdd.append('city_contact_number', formData.city_contact_number);
    formDataToSendAdd.append('province_address', formData.province_address);
    formDataToSendAdd.append('province_contact_number', formData.province_contact_number);
    try {
      const response1 = await fetch('http://127.0.0.1:8000/api/stdntpersonal/', {
        method: 'POST',
        body: formDataToSend
      });
  
      if (response1.ok) {
        console.log('First request succeeded');
        // Append additional formData to formDataToSendAdd
  
        const response2 = await fetch('http://127.0.0.1:8000/api/addstdntinfo/', {
          method: 'POST',
          body: formDataToSendAdd
        });
  
        if (response2.ok) {
          console.log('Second request succeeded');
        } else {
          console.error('Failed to submit second request');
        }
      } else {
        console.error('Failed to submit first request');
      }
    } catch (error) {
      console.error('Error submitting requests:', error);
    }
  };
  
  return (
    <AnimatedPage>
    <div className="container">
      <h2>Personal Data</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="f_name">First Name:</label>
          <input
            type="text"
            id="f_name"
            name="f_name"
            value={formData.f_name}
            onChange={handleChange}
            required
          />
        </div>

       


        <div className="form-group">
          <label htmlFor="m_name">Middle Name:</label>
          <input
            type="text"
            id="m_name"
            name="m_name"
            value={formData.m_name}
            onChange={handleChange}
            required
          />
        </div>


        <div className="form-group">
          <label htmlFor="l_name">Last Name:</label>
          <input
            type="text"
            id="l_name"
            name="l_name"
            value={formData.l_name}
            onChange={handleChange}
            required
          />
        </div>




        <div className="form-group-container">
          <div className="form-group">
            <label htmlFor="gender">Gender:</label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="birth_date">Birth Date:</label>
            <input
              type="date"
              id="birth_date"
              name="birth_date"
              value={formData.birth_date}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
          <label htmlFor="birth_place">Place of Birth:</label>
          <input
            type="text"
            id="birth_place"
            name="birth_place"
            value={formData.birth_place}
            onChange={handleChange}
            required
          />
        </div>
        </div>
        

        <div className="form-group-container">

          
        <div className="form-group">
            <label htmlFor="country">Country:</label>
            <select
        id="country"
        name="country"
        autoComplete="country"
        value={formData.country}
        onChange={handleChange}
        required
    >
        <option value="">Select Country</option>
        <option value="Afghanistan">Afghanistan</option>
        <option value="Albania">Albania</option>
        <option value="Algeria">Algeria</option>
        <option value="Andorra">Andorra</option>
        <option value="Angola">Angola</option>
        <option value="Antigua and Barbuda">Antigua and Barbuda</option>
        <option value="Argentina">Argentina</option>
        <option value="Armenia">Armenia</option>
        <option value="Australia">Australia</option>
        <option value="Austria">Austria</option>
        <option value="Azerbaijan">Azerbaijan</option>
        <option value="Bahamas">Bahamas</option>
        <option value="Bahrain">Bahrain</option>
        <option value="Bangladesh">Bangladesh</option>
        <option value="Barbados">Barbados</option>
        <option value="Belarus">Belarus</option>
        <option value="Belgium">Belgium</option>
        <option value="Belize">Belize</option>
        <option value="Benin">Benin</option>
        <option value="Bhutan">Bhutan</option>
        <option value="Bolivia">Bolivia</option>
        <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
        <option value="Botswana">Botswana</option>
        <option value="Brazil">Brazil</option>
        <option value="Brunei">Brunei</option>
        <option value="Bulgaria">Bulgaria</option>
        <option value="Burkina Faso">Burkina Faso</option>
        <option value="Burundi">Burundi</option>
        <option value="Cabo Verde">Cabo Verde</option>
        <option value="Cambodia">Cambodia</option>
        <option value="Cameroon">Cameroon</option>
        <option value="Canada">Canada</option>
        <option value="Central African Republic">Central African Republic</option>
        <option value="Chad">Chad</option>
        <option value="Chile">Chile</option>
        <option value="China">China</option>
        <option value="Colombia">Colombia</option>
        <option value="Comoros">Comoros</option>
        <option value="Congo (Congo-Brazzaville)">Congo (Congo-Brazzaville)</option>
        <option value="Costa Rica">Costa Rica</option>
        <option value="Croatia">Croatia</option>
        <option value="Cuba">Cuba</option>
        <option value="Cyprus">Cyprus</option>
        <option value="Czechia (Czech Republic)">Czechia (Czech Republic)</option>
        <option value="Denmark">Denmark</option>
        <option value="Djibouti">Djibouti</option>
        <option value="Dominica">Dominica</option>
        <option value="Dominican Republic">Dominican Republic</option>
        <option value="Ecuador">Ecuador</option>
        <option value="Egypt">Egypt</option>
        <option value="El Salvador">El Salvador</option>
        <option value="Equatorial Guinea">Equatorial Guinea</option>
        <option value="Eritrea">Eritrea</option>
        <option value="Estonia">Estonia</option>
        <option value="Eswatini">Eswatini</option>
        <option value="Ethiopia">Ethiopia</option>
        <option value="Fiji">Fiji</option>
        <option value="Finland">Finland</option>
        <option value="France">France</option>
        <option value="Gabon">Gabon</option>
        <option value="Gambia">Gambia</option>
        <option value="Georgia">Georgia</option>
        <option value="Germany">Germany</option>
        <option value="Ghana">Ghana</option>
        <option value="Greece">Greece</option>
        <option value="Grenada">Grenada</option>
        <option value="Guatemala">Guatemala</option>
        <option value="Guinea">Guinea</option>
        <option value="Guinea-Bissau">Guinea-Bissau</option>
        <option value="Guyana">Guyana</option>
        <option value="Haiti">Haiti</option>
        <option value="Holy See">Holy See</option>
        <option value="Honduras">Honduras</option>
        <option value="Hungary">Hungary</option>
        <option value="Iceland">Iceland</option>
        <option value="India">India</option>
        <option value="Indonesia">Indonesia</option>
        <option value="Iran">Iran</option>
        <option value="Iraq">Iraq</option>
        <option value="Ireland">Ireland</option>
        <option value="Israel">Israel</option>
        <option value="Italy">Italy</option>
        <option value="Jamaica">Jamaica</option>
        <option value="Japan">Japan</option>
        <option value="Jordan">Jordan</option>
        <option value="Kazakhstan">Kazakhstan</option>
        <option value="Kenya">Kenya</option>
        <option value="Kiribati">Kiribati</option>
        <option value="Korea">Korea</option>
        <option value="Korea, South">Korea, South</option>
        <option value="Kosovo">Kosovo</option>
        <option value="Kuwait">Kuwait</option>
        <option value="Kyrgyzstan">Kyrgyzstan</option>
        <option value="Laos">Laos</option>
        <option value="Latvia">Latvia</option>
        <option value="Lebanon">Lebanon</option>
        <option value="Lesotho">Lesotho</option>
        <option value="Liberia">Liberia</option>
        <option value="Libya">Libya</option>
        <option value="Liechtenstein">Liechtenstein</option>
        <option value="Lithuania">Lithuania</option>
        <option value="Luxembourg">Luxembourg</option>
        <option value="Madagascar">Madagascar</option>
        <option value="Malawi">Malawi</option>
        <option value="Malaysia">Malaysia</option>
        <option value="Maldives">Maldives</option>
        <option value="Mali">Mali</option>
        <option value="Malta">Malta</option>
        <option value="Marshall Islands">Marshall Islands</option>
        <option value="Mauritania">Mauritania</option>
        <option value="Mauritius">Mauritius</option>
        <option value="Mexico">Mexico</option>
        <option value="Micronesia">Micronesia</option>
        <option value="Moldova">Moldova</option>
        <option value="Monaco">Monaco</option>
        <option value="Mongolia">Mongolia</option>
        <option value="Montenegro">Montenegro</option>
        <option value="Morocco">Morocco</option>
        <option value="Mozambique">Mozambique</option>
        <option value="Myanmar (formerly Burma)">Myanmar (formerly Burma)</option>
        <option value="Namibia">Namibia</option>
        <option value="Nauru">Nauru</option>
        <option value="Nepal">Nepal</option>
        <option value="Netherlands">Netherlands</option>
        <option value="New Zealand">New Zealand</option>
        <option value="Nicaragua">Nicaragua</option>
        <option value="Niger">Niger</option>
        <option value="Nigeria">Nigeria</option>
        <option value="North Macedonia">North Macedonia</option>
        <option value="Norway">Norway</option>
        <option value="Oman">Oman</option>
        <option value="Pakistan">Pakistan</option>
        <option value="Palau">Palau</option>
        <option value="Palestine State">Palestine State</option>
        <option value="Panama">Panama</option>
        <option value="Papua New Guinea">Papua New Guinea</option>
        <option value="Paraguay">Paraguay</option>
        <option value="Peru">Peru</option>
        <option value="Philippines">Philippines</option>
        <option value="Poland">Poland</option>
        <option value="Portugal">Portugal</option>
        <option value="Qatar">Qatar</option>
        <option value="Romania">Romania</option>
        <option value="Russia">Russia</option>
        <option value="Rwanda">Rwanda</option>
        <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
        <option value="Saint Lucia">Saint Lucia</option>
        <option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
        <option value="Samoa">Samoa</option>
        <option value="San Marino">San Marino</option>
        <option value="Sao Tome and Principe">Sao Tome and Principe</option>
        <option value="Saudi Arabia">Saudi Arabia</option>
        <option value="Senegal">Senegal</option>
        <option value="Serbia">Serbia</option>
        <option value="Seychelles">Seychelles</option>
        <option value="Sierra Leone">Sierra Leone</option>
        <option value="Singapore">Singapore</option>
        <option value="Slovakia">Slovakia</option>
        <option value="Slovenia">Slovenia</option>
        <option value="Solomon Islands">Solomon Islands</option>
        <option value="Somalia">Somalia</option>
        <option value="South Africa">South Africa</option>
        <option value="South Sudan">South Sudan</option>
        <option value="Spain">Spain</option>
        <option value="Sri Lanka">Sri Lanka</option>
        <option value="Sudan">Sudan</option>
        <option value="Suriname">Suriname</option>
        <option value="Sweden">Sweden</option>
        <option value="Switzerland">Switzerland</option>
        <option value="Syria">Syria</option>
        <option value="Taiwan">Taiwan</option>
        <option value="Tajikistan">Tajikistan</option>
        <option value="Tanzania">Tanzania</option>
        <option value="Thailand">Thailand</option>
        <option value="Timor-Leste">Timor-Leste</option>
        <option value="Togo">Togo</option>
        <option value="Tonga">Tonga</option>
        <option value="Trinidad and Tobago">Trinidad and Tobago</option>
        <option value="Tunisia">Tunisia</option>
        <option value="Turkey">Turkey</option>
        <option value="Turkmenistan">Turkmenistan</option>
        <option value="Tuvalu">Tuvalu</option>
        <option value="Uganda">Uganda</option>
        <option value="Ukraine">Ukraine</option>
        <option value="United Arab Emirates">United Arab Emirates</option>
        <option value="United Kingdom">United Kingdom</option>
        <option value="United States of America">United States of America</option>
        <option value="Uruguay">Uruguay</option>
        <option value="Uzbekistan">Uzbekistan</option>
        <option value="Vanuatu">Vanuatu</option>
        <option value="Vatican City (Holy See)">Vatican City (Holy See)</option>
        <option value="Venezuela">Venezuela</option>
        <option value="Vietnam">Vietnam</option>
        <option value="Yemen">Yemen</option>
        <option value="Zambia">Zambia</option>
        <option value="Zimbabwe">Zimbabwe</option>
            </select>

          </div>


          <div className="form-group">
          <label htmlFor="citizenship">Citizenship:</label>
          <select
              id="citizenship"
              name="citizenship"
              value={formData.citizenship}
              onChange={handleChange}
              required
          >
              <option value="">Select Citizenship</option>
              <option value="Afghan">Afghan</option>
              <option value="Albanian">Albanian</option>
              <option value="Algerian">Algerian</option>
              <option value="American">American</option>
              <option value="Andorran">Andorran</option>
              <option value="Angolan">Angolan</option>
              <option value="Antiguans">Antiguans</option>
              <option value="Argentinean">Argentinean</option>
              <option value="Armenian">Armenian</option>
              <option value="Australian">Australian</option>
              <option value="Austrian">Austrian</option>
              <option value="Azerbaijani">Azerbaijani</option>
              <option value="Bahamian">Bahamian</option>
              <option value="Bahraini">Bahraini</option>
              <option value="Bangladeshi">Bangladeshi</option>
              <option value="Barbadian">Barbadian</option>
              <option value="Barbudans">Barbudans</option>
              <option value="Batswana">Batswana</option>
              <option value="Belarusian">Belarusian</option>
              <option value="Belgian">Belgian</option>
              <option value="Belizean">Belizean</option>
              <option value="Beninese">Beninese</option>
              <option value="Bhutanese">Bhutanese</option>
              <option value="Bolivian">Bolivian</option>
              <option value="Bosnian">Bosnian</option>
              <option value="Brazilian">Brazilian</option>
              <option value="British">British</option>
              <option value="Bruneian">Bruneian</option>
              <option value="Bulgarian">Bulgarian</option>
              <option value="Burkinabe">Burkinabe</option>
              <option value="Burmese">Burmese</option>
              <option value="Burundian">Burundian</option>
              <option value="Cambodian">Cambodian</option>
              <option value="Cameroonian">Cameroonian</option>
              <option value="Canadian">Canadian</option>
              <option value="Cape Verdean">Cape Verdean</option>
              <option value="Central African">Central African</option>
              <option value="Chadian">Chadian</option>
              <option value="Chilean">Chilean</option>
              <option value="Chinese">Chinese</option>
              <option value="Colombian">Colombian</option>
              <option value="Comoran">Comoran</option>
              <option value="Congolese">Congolese</option>
              <option value="Costa Rican">Costa Rican</option>
              <option value="Croatian">Croatian</option>
              <option value="Cuban">Cuban</option>
              <option value="Cypriot">Cypriot</option>
              <option value="Czech">Czech</option>
              <option value="Danish">Danish</option>
              <option value="Djibouti">Djibouti</option>
              <option value="Dominican">Dominican</option>
              <option value="Dutch">Dutch</option>
              <option value="East Timorese">East Timorese</option>
              <option value="Ecuadorean">Ecuadorean</option>
              <option value="Egyptian">Egyptian</option>
              <option value="Emirian">Emirian</option>
              <option value="Equatorial Guinean">Equatorial Guinean</option>
              <option value="Eritrean">Eritrean</option>
              <option value="Estonian">Estonian</option>
              <option value="Ethiopian">Ethiopian</option>
              <option value="Fijian">Fijian</option>
              <option value="Filipino">Filipino</option>
              <option value="Finnish">Finnish</option>
              <option value="French">French</option>
              <option value="Gabonese">Gabonese</option>
              <option value="Gambian">Gambian</option>
              <option value="Georgian">Georgian</option>
              <option value="German">German</option>
              <option value="Ghanaian">Ghanaian</option>
              <option value="Greek">Greek</option>
              <option value="Grenadian">Grenadian</option>
              <option value="Guatemalan">Guatemalan</option>
              <option value="Guinea-Bissauan">Guinea-Bissauan</option>
              <option value="Guinean">Guinean</option>
              <option value="Guyanese">Guyanese</option>
              <option value="Haitian">Haitian</option>
              <option value="Herzegovinian">Herzegovinian</option>
              <option value="Honduran">Honduran</option>
              <option value="Hungarian">Hungarian</option>
              <option value="I-Kiribati">I-Kiribati</option>
              <option value="Icelander">Icelander</option>
              <option value="Indian">Indian</option>
              <option value="Indonesian">Indonesian</option>
              <option value="Iranian">Iranian</option>
              <option value="Iraqi">Iraqi</option>
              <option value="Irish">Irish</option>
              <option value="Israeli">Israeli</option>
              <option value="Italian">Italian</option>
              <option value="Ivorian">Ivorian</option>
              <option value="Jamaican">Jamaican</option>
              <option value="Japanese">Japanese</option>
              <option value="Jordanian">Jordanian</option>
              <option value="Kazakhstani">Kazakhstani</option>
              <option value="Kenyan">Kenyan</option>
              <option value="Kittian and Nevisian">Kittian and Nevisian</option>
              <option value="Kuwaiti">Kuwaiti</option>
              <option value="Kyrgyz">Kyrgyz</option>
              <option value="Laotian">Laotian</option>
              <option value="Latvian">Latvian</option>
              <option value="Lebanese">Lebanese</option>
              <option value="Liberian">Liberian</option>
              <option value="Libyan">Libyan</option>
              <option value="Liechtensteiner">Liechtensteiner</option>
              <option value="Lithuanian">Lithuanian</option>
              <option value="Luxembourger">Luxembourger</option>
              <option value="Macedonian">Macedonian</option>
              <option value="Malagasy">Malagasy</option>
              <option value="Malawian">Malawian</option>
              <option value="Malaysian">Malaysian</option>
              <option value="Maldivan">Maldivan</option>
              <option value="Malian">Malian</option>
              <option value="Maltese">Maltese</option>
              <option value="Marshallese">Marshallese</option>
              <option value="Mauritanian">Mauritanian</option>
              <option value="Mauritian">Mauritian</option>
              <option value="Mexican">Mexican</option>
              <option value="Micronesian">Micronesian</option>
              <option value="Moldovan">Moldovan</option>
              <option value="Monacan">Monacan</option>
              <option value="Mongolian">Mongolian</option>
              <option value="Moroccan">Moroccan</option>
              <option value="Mosotho">Mosotho</option>
              <option value="Motswana">Motswana</option>
              <option value="Mozambican">Mozambican</option>
              <option value="Namibian">Namibian</option>
              <option value="Nauruan">Nauruan</option>
              <option value="Nepalese">Nepalese</option>
              <option value="Netherlander">Netherlander</option>
              <option value="New Zealander">New Zealander</option>
              <option value="Ni-Vanuatu">Ni-Vanuatu</option>
              <option value="Nicaraguan">Nicaraguan</option>
              <option value="Nigerian">Nigerian</option>
              <option value="Nigerien">Nigerien</option>
              <option value="North Korean">North Korean</option>
              <option value="Northern Irish">Northern Irish</option>
              <option value="Norwegian">Norwegian</option>
              <option value="Omani">Omani</option>
              <option value="Pakistani">Pakistani</option>
              <option value="Palauan">Palauan</option>
              <option value="Panamanian">Panamanian</option>
              <option value="Papua New Guinean">Papua New Guinean</option>
              <option value="Paraguayan">Paraguayan</option>
              <option value="Peruvian">Peruvian</option>
              <option value="Polish">Polish</option>
              <option value="Portuguese">Portuguese</option>
              <option value="Qatari">Qatari</option>
              <option value="Romanian">Romanian</option>
              <option value="Russian">Russian</option>
              <option value="Rwandan">Rwandan</option>
              <option value="Saint Lucian">Saint Lucian</option>
              <option value="Salvadoran">Salvadoran</option>
              <option value="Samoan">Samoan</option>
              <option value="San Marinese">San Marinese</option>
              <option value="Sao Tomean">Sao Tomean</option>
              <option value="Saudi">Saudi</option>
              <option value="Scottish">Scottish</option>
              <option value="Senegalese">Senegalese</option>
              <option value="Serbian">Serbian</option>
              <option value="Seychellois">Seychellois</option>
              <option value="Sierra Leonean">Sierra Leonean</option>
              <option value="Singaporean">Singaporean</option>
              <option value="Slovakian">Slovakian</option>
              <option value="Slovenian">Slovenian</option>
              <option value="Solomon Islander">Solomon Islander</option>
              <option value="Somali">Somali</option>
              <option value="South African">South African</option>
              <option value="South Korean">South Korean</option>
              <option value="Spanish">Spanish</option>
              <option value="Sri Lankan">Sri Lankan</option>
              <option value="Sudanese">Sudanese</option>
              <option value="Surinamer">Surinamer</option>
              <option value="Swazi">Swazi</option>
              <option value="Swedish">Swedish</option>
              <option value="Swiss">Swiss</option>
              <option value="Syrian">Syrian</option>
              <option value="Taiwanese">Taiwanese</option>
              <option value="Tajik">Tajik</option>
              <option value="Tanzanian">Tanzanian</option>
              <option value="Thai">Thai</option>
              <option value="Togolese">Togolese</option>
              <option value="Tongan">Tongan</option>
              <option value="Trinidadian or Tobagonian">Trinidadian or Tobagonian</option>
              <option value="Tunisian">Tunisian</option>
              <option value="Turkish">Turkish</option>
              <option value="Tuvaluan">Tuvaluan</option>
              <option value="Ugandan">Ugandan</option>
              <option value="Ukrainian">Ukrainian</option>
              <option value="Uruguayan">Uruguayan</option>
              <option value="Uzbekistani">Uzbekistani</option>
              <option value="Venezuelan">Venezuelan</option>
              <option value="Vietnamese">Vietnamese</option>
              <option value="Welsh">Welsh</option>
              <option value="Yemenite">Yemenite</option>
              <option value="Zambian">Zambian</option>
              <option value="Zimbabwean">Zimbabwean</option>
              <option value="Other">Other</option>
            
          </select>
      </div>

          <div className="form-group">
            <label htmlFor="acr">ACR (foreign students):</label>
            <input
              type="text"
              id="acr"
              name="acr"
              value={formData.acr}
              onChange={handleChange}
            />
          </div>

        </div>
        
       

        <div className="form-group-container">

          <div className="form-group">
              <label htmlFor="marital_status">Marital Status:</label>
              <select
                id="marital_status"
                name="marital_status"
                value={formData.marital_status}
                onChange={handleChange}
                required
              >
                  <option value="">Select Marital Status</option>
                  <option value="Single">Single</option>
                  <option value="Married">Married</option>
                  <option value="Divorced">Divorced</option>
                  <option value="Widowed">Widowed</option>
              </select>
            </div>

          <div className="form-group">
          <label htmlFor="religion">Religion:</label>
          <input
            type="text"
            id="religion"
            name="religion"
            value={formData.religion}
            onChange={handleChange}
            required
          />
        </div>
        </div>
        
       

       <div className="form-group-container">
       <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="contact_number">Contact Number:</label>
          <input
            type="text"
            id="contact_number"
            name="contact_number"
            value={formData.contact_number}
            onChange={handleChange}
            required
          />
        </div>
      
       </div>
        
       
       <div className="form-group-container">
       <div className="form-group">
          <label htmlFor="city_address">City Address:</label>
          <input
            type="text"
            id="city_address"
            name="city_address"
            value={formData.city_address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="city_contact_number">City Contact Number:</label>
          <input
            type="text"
            id="city_contact_number"
            name="city_contact_number"
            value={formData.city_contact_number}
            onChange={handleChange}
            required
          />
        </div>
      </div>
       

       <div className="form-group-container">
       <div className="form-group">
          <label htmlFor="province_address">Province Address:</label>
          <input
            type="text"
            id="province_address"
            name="province_address"
            value={formData.province_address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="province_contact_number">Province Contact Number:</label>
          <input
            type="text"
            id="province_contact_number"
            name="province_contact_number"
            value={formData.province_contact_number}
            onChange={handleChange}
            required
          />
        </div>

       </div>
        
        
        <input type="submit" value="Submit" className='btn_submit'/>
      </form>
    </div>
    </AnimatedPage>
  );
};

export default StudentForm;
