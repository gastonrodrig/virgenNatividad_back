import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Pension, PensionSchema } from './schema/pension.schema';
import { Estudiante, EstudianteSchema } from 'src/estudiante/schema/estudiante.schema';
import { PensionService } from './pension.service';
import { PensionController } from './pension.controller';
import { ScheduleModule } from '@nestjs/schedule';
import { PeriodoEscolar, PeriodoEscolarSchema } from 'src/periodo-escolar/schema/periodo-escolar.schema';
import { Pago, PagoSchema } from 'src/pago/schema/pago.schema';
import { Documento, DocumentoSchema } from 'src/documento/schema/documento.schema';

@Module({
  imports:[
    MongooseModule.forFeature([
      {name: Pension.name, schema: PensionSchema},
      { name: PeriodoEscolar.name, schema: PeriodoEscolarSchema },
      {name: Estudiante.name, schema: EstudianteSchema},
      { name: Pago.name, schema: PagoSchema },
      { name: Documento.name, schema: DocumentoSchema },
    ]),
    ScheduleModule.forRoot()
  ],
  providers:[PensionService],
  controllers:[PensionController]
})
export class PensionModule {}
