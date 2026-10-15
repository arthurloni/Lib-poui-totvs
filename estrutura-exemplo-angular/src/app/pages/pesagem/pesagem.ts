import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  PoButtonModule,
  PoFieldModule,
  PoInfoModule,
  PoInfoOrientation,
  PoModalAction,
  PoModalComponent,
  PoModalModule,
  PoPageModule,
  PoSelectOption,
  PoTableColumn,
  PoTableModule,
  PoWidgetModule,
} from '@po-ui/ng-components';

@Component({
  selector: 'app-pesagem',
  imports: [
    FormsModule,        // necessário para usar ngModel nos campos
    PoPageModule,       // po-page-default
    PoModalModule,      // po-modal (equivalente ao MsDialog)
    PoWidgetModule,     // po-widget (equivalente ao TGroup / caixa com título)
    PoFieldModule,      // po-select, po-input
    PoInfoModule,       // po-info (rótulo + valor somente leitura)
    PoTableModule,      // po-table (equivalente ao grid / MsNewGetDados)
    PoButtonModule,     // po-button
  ],
  templateUrl: './pesagem.html',
  styleUrl: './pesagem.css',
})
export class Pesagem {
  // Referência ao <po-modal> do HTML, para podermos chamar open() e close()
  @ViewChild(PoModalComponent, { static: true }) modal!: PoModalComponent;

  // Orientação do po-info: rótulo e valor lado a lado (é um enum, não aceita texto direto no HTML)
  horizontal = PoInfoOrientation.Horizontal;

  // ---------- DADOS FICTÍCIOS (só para a parte visual) ----------
  ticket = {
    numero: '0000001',
    produto: '000001 - PRODUTO EXEMPLO',
    quantidade: '10,00',
    placa: 'ABC1D23',
  };

  cliente = {
    nome: '000001 - CLIENTE EXEMPLO LTDA',
    documento: '00.000.000/0001-00',
    contrato: '000001',
  };

  // ---------- DANFE ----------
  enviarWhatsApp = 'S';
  imprimirDanfe = 'S';
  imprimirRecibo = 'S';
  telefone = '65999990000';
  vias = '1';

  opcoesSimNao: PoSelectOption[] = [
    { label: 'Sim', value: 'S' },
    { label: 'Não', value: 'N' },
  ];

  opcoesVias: PoSelectOption[] = [
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
  ];

  // ---------- CONTRATOS EM ABERTO ----------
  colunasContratos: PoTableColumn[] = [
    { property: 'contrato', label: 'Contrato', width: '20%' },
    { property: 'um', label: 'UM', width: '10%' },
    { property: 'valorUnit', label: 'R$ Unit', type: 'currency', format: 'BRL', width: '20%' },
    { property: 'quantidade', label: 'Quant', type: 'number', format: '1.2-2', width: '25%' },
    { property: 'saldo', label: 'Saldo', type: 'number', format: '1.2-2', width: '25%' },
  ];

  // $selected: true => a linha já abre marcada (como o "Mark" do grid)
  contratos = [
    { contrato: '000001', um: 'TL', valorUnit: 50.0, quantidade: 1000, saldo: 1000, $selected: true },
    { contrato: '000002', um: 'TL', valorUnit: 52.5, quantidade: 500, saldo: 320 },
  ];

  // ---------- TOTALIZADORES ----------
  saldoTotalSelecionado = '1.000,00';
  saldoTicket = '0,00';

  // ---------- FORMA DE PAGAMENTO ----------
  colunasPagamento: PoTableColumn[] = [
    { property: 'parcela', label: 'Parcela', width: '8%' },
    { property: 'vencimento', label: 'Vencimento', type: 'date', format: 'dd/MM/yyyy', width: '12%' },
    { property: 'valor', label: 'Valor', type: 'currency', format: 'BRL', width: '12%' },
    { property: 'tipoPgto', label: 'Tipo Pgto', width: '12%' },
    { property: 'operCartao', label: 'Oper.Cartão', width: '14%' },
    { property: 'numCartao', label: 'Num Cartão', width: '14%' },
    { property: 'autPgto', label: 'Aut Pgto', width: '14%' },
    { property: 'numCheque', label: 'Num Cheque', width: '14%' },
  ];

  pagamentos = [
    {
      parcela: '01',
      vencimento: '2026-10-12',
      valor: 500.0,
      tipoPgto: 'PIX',
      operCartao: '',
      numCartao: '',
      autPgto: '',
      numCheque: '',
    },
  ];

  totalFormaPagamento = 'R$ 500,00';

  // ---------- AÇÕES DO MODAL ----------
  // PoModalAction = objeto com o texto do botão e a função que ele executa
  acaoConfirmar: PoModalAction = {
    label: 'Confirmar',
    action: () => this.confirmar(),
  };

  acaoCancelar: PoModalAction = {
    label: 'Cancelar',
    action: () => this.modal.close(),
  };

  abrir(): void {
    this.modal.open();
  }

  confirmar(): void {
    // A lógica fica por sua conta :)
    this.modal.close();
  }

  gerarPix(): void {
    // A lógica fica por sua conta :)
  }
}
