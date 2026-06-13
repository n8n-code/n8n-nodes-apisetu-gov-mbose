import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class ApisetuGovMboseApi implements ICredentialType {
        name = 'N8nDevApisetuGovMboseApi';

        displayName = 'Apisetu Gov Mbose API';

        icon: Icon = { light: 'file:../nodes/ApisetuGovMbose/apisetu-gov-mbose.svg', dark: 'file:../nodes/ApisetuGovMbose/apisetu-gov-mbose.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://apisetu.gov.in/mbose/v3',
                        required: true,
                        placeholder: 'https://apisetu.gov.in/mbose/v3',
                        description: 'The base URL of your Apisetu Gov Mbose API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'X-APISETU-APIKEY': '={{$credentials.apiKey}}',
                        },
                },
        };


}
